import { FieldArray } from "formik";
import { InputTextArray } from "../../../common/components/InputTextArray";
import { fieldsEducacion } from "../../data/inputFieldMember";
import { initialValuesFieldsEducation } from "../../data/stepFormModel/initialValuesStepForm";
import {
  Education,
  EducationInformation,
} from "../../interface/educationInformation.interface";

export const EducationForm = ({ education }: EducationInformation) => {
  return (
    <>
      <h1>
        <span className="text-2xl font-bold">Educación</span>
      </h1>
      <FieldArray
        name="education"
        render={({ remove, push }) => (
          <div>
            {education.map((education: Education, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 gap-4 border-b-2 pb-4 mb-8">
                  {fieldsEducacion.map((field) => (
                    <InputTextArray
                      key={field.name}
                      index={index}
                      arrayName="education"
                      {...field}
                    />
                  ))}
                  <div className="flex items-end justify-start">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 mb-2 ml-2 text-white font-bold rounded w-10 h-10"
                      onClick={() => remove(index)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white mt-6 font-bold py-2 px-4 rounded"
              onClick={() => push(initialValuesFieldsEducation)}
            >
              Añadir estudio
            </button>
          </div>
        )}
      />
    </>
  );
};
