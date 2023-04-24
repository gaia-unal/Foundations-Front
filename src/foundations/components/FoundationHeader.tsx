import { BsPencilFill } from "react-icons/bs";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteFoundationMutation } from "../../store/fundations/foundation.api";
import { useAppSelector } from "../../hooks/useRedux";

interface Props {
  name: string | undefined;
  logo: string | undefined;
}

export const FoundationHeader = ({ name, logo }: Props) => {
  const navigate = useNavigate();
  const { uid } = useParams();
  const { rol } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();
  const [deleteFoundation, { isLoading: isDeletingFoundation }] =
    useDeleteFoundationMutation();

  const onClickDelete = async () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteFoundation(uid as string);
        navigate("/");
        Swal.fire(
          "Eliminado!",
          "La fundación ha sido eliminada exitosamente.",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 pb-2 border-black ">
        <h1 className="text-4xl font-bold">{name}</h1>
        <div className="flex gap-2">
          {(rol === "superadmin" || rol === "admin" + uid) && (
            <>
              <Link
                to={`/foundation/${uid}/addmembers`}
                className="bg-primary text-white px-4 py-2 rounded-md"
                aria-disabled={pathname === `/foundation/${uid}/addmembers`}
              >
                Agregar miembro
              </Link>
              <button
                onClick={onClickDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Eliminar fundación
              </button>
            </>
          )}
        </div>
      </div>

      {pathname !== `/foundation/${uid}/addmembers` && (
        <div className="flex justify-between mt-4">
          <div className="flex gap-3 ">
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
          {rol === "superadmin" ||
            (rol === "admin" + uid && (
              <Link
                to={`/foundation/${uid}/edit`}
                className="bg-black text-white px-2 text-center flex justify-center items-center rounded-md"
              >
                <BsPencilFill />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
