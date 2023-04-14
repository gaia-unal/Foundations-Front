import { keysTranslate } from "../../common/data/keyTranslate";
import { ReviewItem } from "../components/ReviewItem";
import { transformMember } from "../helper/transformMember";
import { member } from "../interface/member.interface";

export const ReviewNewMember = ({ values }: { values: member }) => {
  // const { level, ...valuesForm } = values;

  const valuesWithoutIds = transformMember(values);

  return (
    <>
      <div className="w-full mt-6 bg-white">
        <h1 className="text-xl font-semibold border-b-2 mb-2">
          Información personal
        </h1>
        <div className="grid grid-cols-2">
          {Object.entries(valuesWithoutIds).map(([key, value]) =>
            typeof value === "string" ? (
              <div key={key} className="mb-2 flex flex-col">
                <h1 className="text-lg font-semibold">
                  {keysTranslate[key as keyof typeof keysTranslate]}
                </h1>
                <h1 className="pl-2">{value}</h1>
              </div>
            ) : (
              <div key={key} className="col-span-2 mt-8">
                <h1 className="text-xl font-semibold border-b-2 mb-2">
                  {keysTranslate[key as keyof typeof keysTranslate]}
                </h1>
                <ReviewItem
                  title={keysTranslate[key as keyof typeof keysTranslate]}
                  values={value}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
