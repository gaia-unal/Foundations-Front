import { FieldArray } from "formik";
import { InputTextArray } from "../../../common/components/InputTextArray";
import { fieldsFamily } from "../../data/inputFieldMember";
import { initialValuesFieldsFamily } from "../../data/stepFormModel/initialValuesStepForm";
import {
  Family,
  FamilyInformation,
} from "../../interface/familyInformation.interface";

export const FamilyForm = ({ family }: FamilyInformation) => {
  return (
    <>
      <h1>
        <span className="text-2xl font-bold">Familia</span>
      </h1>
      <FieldArray
        name="family"
        render={({ remove, push }) => (
          <div>
            {family.map((family: Family, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 gap-4 border-b-2 pb-4 mb-8">
                  {fieldsFamily.map((field) => (
                    <InputTextArray
                      key={field.name}
                      index={index}
                      arrayName="family"
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
              onClick={() => push(initialValuesFieldsFamily)}
            >
              Añadir actividad
            </button>
          </div>
        )}
      />
    </>
  );
};
