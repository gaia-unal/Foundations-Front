import { Link, NavLink, useLocation, useParams } from "react-router-dom";

export const FoundationHeader = () => {
  const { uid } = useParams();
  const { pathname } = useLocation();

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 pb-2 border-black ">
        <h1 className="text-4xl font-bold">Foundation x</h1>
        <div className="flex gap-2">
          <Link
            to={`/foundation/${uid}/addmembers`}
            className="bg-primary text-white px-4 py-2 rounded-md"
            aria-disabled={pathname === `/foundation/${uid}/addmembers`}
          >
            Agregar miembro
          </Link>
        </div>
      </div>

      {pathname !== `/foundation/${uid}/addmembers` && (
        <div className="flex gap-3 mt-4">
          <NavLink
            to={`/foundation/${uid}/about`}
            className={({ isActive }) =>
              `customButtomFoundation ${
                isActive ? "bg-gray-400" : "bg-gray-200"
              }`
            }
          >
            Informacion
          </NavLink>
          <NavLink
            to={`/foundation/${uid}/members`}
            className={({ isActive }) =>
              `customButtomFoundation ${
                isActive ? "bg-gray-400" : "bg-gray-200"
              }`
            }
          >
            Miembros
          </NavLink>
        </div>
      )}
    </div>
  );
};
