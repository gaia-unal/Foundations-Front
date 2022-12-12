import { NavLink, useLocation, useParams } from "react-router-dom";

export const FoundationHeader = () => {
  const { uid } = useParams();

  return (
    <div>
      <h1 className="text-4xl border-b-2 pb-2 border-black font-bold mb-3">
        Foundation x
      </h1>
      <div className="flex gap-3 mt-4">
        <NavLink
          to={`/foundation/${uid}/about`}
          className={({ isActive }) =>
            `customButtomFoundation ${isActive ? "bg-gray-400" : "bg-gray-200"}`
          }
        >
          Informacion
        </NavLink>
        <NavLink
          to={`/foundation/${uid}/donations`}
          className={({ isActive }) =>
            `customButtomFoundation ${isActive ? "bg-gray-400" : "bg-gray-200"}`
          }
        >
          Usuarios
        </NavLink>
      </div>
    </div>
  );
};
