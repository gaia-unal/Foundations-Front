import { keysTranslate } from "../../common/data/keyTranslate";
import { AboutItem } from "../components/memberShowItems/AboutMemberItem";
import { foundation } from "../interface/foundation";

interface Props {
  activeFoundation: foundation | undefined;
}

export const AboutFoundation = ({ activeFoundation }: Props) => {
  const { members = [], ...foundation } = activeFoundation || {};
  return (
    <div className="w-full mt-6 bg-white">
      {!!foundation &&
        Object.entries(foundation).map(([key, value]) => {
          if (key === "logo")
            return (
              <div
                key={keysTranslate[key as keyof typeof keysTranslate] + value}
                className="grid grid-cols-2"
              >
                <div className="px-4 py-2 font-semibold">
                  {keysTranslate[key as keyof typeof keysTranslate]}
                </div>
                <img src={value} />
              </div>
            );
          return (
            <AboutItem
              key={key}
              title={keysTranslate[key as keyof typeof keysTranslate]}
              value={value}
            />
          );
        })}
    </div>
  );
};
