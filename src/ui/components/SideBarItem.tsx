import { FunctionComponent } from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export interface SideBarItemProps {
  name: string;
}

const SideBarItem: FunctionComponent<SideBarItemProps> = ({ name }) => {
  return (
    <NavLink
      to={`foundation/${name.replace(" ", "").toLowerCase()}`}
      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer"
    >
      <AiFillRightCircle className="text-primary" />
      <span>{name}</span>
    </NavLink>
  );
};

export default SideBarItem;
