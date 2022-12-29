import { Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useMembers } from "../../hooks/useMembers";
import { useSteps } from "../../hooks/useSteps";
import { initialValuesStepForm } from "../data/stepFormModel/initialValuesStepForm";
import { validationSchemaStepForm } from "../data/stepFormModel/validationSchemaStepForm";
import { BasicInformationMember } from "../interface/basicInformationMember.interface";
import { member } from "../interface/member.interface";
import { ReviewNewMember } from "../view/ReviewNewMember";
import { ActivityForm } from "./formSteps/ActivityForm";
import { BasicInformationForm } from "./formSteps/BasicInformationForm";
import { EducationForm } from "./formSteps/EducationForm";
import { FamilyForm } from "./formSteps/FamilyForm";

export const StepMembershipForm = () => {
  const { step: activeStep, nextStep, prevStep } = useSteps();
  const { uid } = useParams();
  const { startAddMember } = useMembers();
  const navigate = useNavigate();

  const currentValidationStep = validationSchemaStepForm[activeStep];
  const steps = [
    "Informacion personal",
    "Estudios",
    "Familiares",
    "Actividad comercial",
    "Revision de datos",
  ];
  const ShowALert = ({
    name,
    lastName,
    identification,
    address,
    phone,
    email,
    birthDate,
  }: BasicInformationMember) => {
    Swal.fire({
      title: "completado!",
      text: "Se ha registrado correctamente el nuevo miembro",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        startAddMember({
          name,
          lastName,
          identification,
          address,
          phone,
          email,
          birthDate,
        });
        navigate(`/foundation/${uid}/members`);
      }
    });
  };
  const onSubmitFormSteps = (e: any) => {
    if (activeStep === steps.length - 1) {
      ShowALert(e);
    } else {
      nextStep();
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
        initialValues={initialValuesStepForm}
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
