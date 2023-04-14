import { Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik } from "formik";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppSelector } from "../../hooks/useRedux";
import { useSteps } from "../../hooks/useSteps";
import {
  useAddMemberMutation,
  useUpdateMemberMutation,
} from "../../store/fundations/foundation.api";
import { validationSchemaStepForm } from "../data/stepFormModel/validationSchemaStepForm";
import { transformMember } from "../helper/transformMember";
import { member } from "../interface/member.interface";
import { ReviewNewMember } from "../view/ReviewNewMember";
import { ActivityForm } from "./formSteps/ActivityForm";
import { BasicInformationForm } from "./formSteps/BasicInformationForm";
import { EducationForm } from "./formSteps/EducationForm";
import { FamilyForm } from "./formSteps/FamilyForm";

export const StepMembershipForm = () => {
  const { step: activeStep, nextStep, prevStep } = useSteps();
  const { uid } = useParams();
  const navigate = useNavigate();
  const { activeMember } = useAppSelector((state) => state.foundation);
  const { pathname } = useLocation();
  const isEdit = pathname.includes("edit");
  console.log(uid);

  const [
    startAddMemberMutation,
    {
      error: AddingMemberError,
      isError: isAddingMemberError,
      isSuccess,
      isUninitialized,
    },
  ] = useAddMemberMutation();

  console.log(isAddingMemberError, isSuccess, isUninitialized);

  const [
    startUpdateMemberMutation,
    { error: UpdatingMemberError, isError: isUpdatingMemberError },
  ] = useUpdateMemberMutation();

  const currentValidationStep = validationSchemaStepForm[activeStep];
  const steps = [
    "Informacion personal",
    "Estudios",
    "Familiares",
    "Actividad comercial",
    "Revision de datos",
  ];
  const ShowALert = () => {
    Swal.fire({
      title: "completado!",
      text: "Se ha registrado correctamente el miembro",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        isEdit ? navigate(`/foundation/${uid}/members`) : navigate(`/`);
      }
    });
  };
  const onSubmitFormSteps = async (e: member) => {
    if (activeStep !== steps.length - 1) {
      return nextStep();
    }

    if (isEdit) {
      const updatedMember: member = transformMember(e);
      console.log(uid);

      await startUpdateMemberMutation({
        id: uid as string,
        member: updatedMember,
      });
      if (isUpdatingMemberError) {
        Swal.fire({
          title: "Error!",
          text: "No se ha podido actualizar el miembro",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return prevStep();
      } else {
        ShowALert();
      }

      // await startUpdateMemberMutation({ ...e });
    } else {
      await startAddMemberMutation({
        member: e,
        id: uid as string,
      });
      if (isAddingMemberError) {
        Swal.fire({
          title: "Error!",
          text: "No se ha podido registrar el nuevo miembro",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return prevStep();
      } else {
        ShowALert();
      }
    }
  };

  const renderStepContent = (step: number, values: member) => {
    switch (step) {
      case 0:
        return <BasicInformationForm />;
      case 1:
        return <EducationForm education={values.education} />;
      case 2:
        return <FamilyForm family={values.family} />;
      case 3:
        return <ActivityForm activity={values.activity} />;
      case 4:
        return <ReviewNewMember values={values} />;
      default:
        return <h1>Informacion personal</h1>;
    }
  };

  return (
    <div className="mt-6">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik
        initialValues={activeMember}
        validationSchema={currentValidationStep}
        onSubmit={onSubmitFormSteps}
      >
        {({ values }: { values: member; isSubmitting: boolean }) => {
          return (
            <Form>
              <div className="w-full mt-10 bg-white">
                <div className="mb-2 flex flex-col">
                  {renderStepContent(activeStep, values)}
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                {activeStep === 0 ? null : (
                  <button
                    className="py-2 px-4 rounded bg-gray-500 text-white hover:bg-slate-400"
                    onClick={prevStep}
                    type="button"
                  >
                    Volver
                  </button>
                )}

                <button
                  className="py-2 px-4 rounded bg-blue-800 text-white hover:bg-slate-400"
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Guardar" : "Siguiente"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
