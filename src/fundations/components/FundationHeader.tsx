import { NavLink, useLocation, useParams } from "react-router-dom";

export const FundationHeader = () => {
  const { uid } = useParams();

  return (
    <div>
      <h1 className="text-4xl border-b-2 pb-2 border-black font-bold mb-3">
        Fundation x
      </h1>
      <div className="flex gap-3 mt-4">
        <NavLink
          to={`/fundation/${uid}/about`}
          className={({ isActive }) =>
            `customButtomFundation ${isActive ? "bg-gray-400" : "bg-gray-200"}`
          }
        >
          Informacion
        </NavLink>
        <NavLink
          to={`/fundation/${uid}/donations`}
          className={({ isActive }) =>
            `customButtomFundation ${isActive ? "bg-gray-400" : "bg-gray-200"}`
          }
        >
          Usuarios
        </NavLink>
      </div>
    </div>
  );
};
