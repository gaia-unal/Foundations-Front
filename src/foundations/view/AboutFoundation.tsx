import { keysTranslate } from "../../common/data/keyTranslate";
import { AboutItem } from "../components/memberShowItems/AboutMemberItem";
import { foundation } from "../interface/foundation";

interface Props {
  activeFoundation: foundation | undefined;
}

export const AboutFoundation = ({ activeFoundation }: Props) => {
  return (
    <div className="w-full mt-6 bg-white">
      {!!activeFoundation &&
        Object.entries(activeFoundation).map(([key, value]) => (
          <AboutItem
            key={key}
            title={keysTranslate[key as keyof typeof keysTranslate]}
            value={value}
          />
        ))}
    </div>
  );
};
