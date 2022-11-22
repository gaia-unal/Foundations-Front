import { FaUserAlt } from "react-icons/fa";
import { SiConfluence } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { startLogout } from "../../store/auth/authThunk";

export const Navbar = () => {
  const { displayName, photoURL } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClickHome = () => {
    navigate("/");
  };
  const onClickLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="bg-gray-300 w-full p-6 shadow-sm shadow-paragraph">
      <div className="flex justify-between items-center">
        <SiConfluence
          className="text-4xl text-primary cursor-pointer"
          onClick={onClickHome}
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-primary">Hola, {displayName}</span>
            {photoURL ? (
              <img
                className="h-10 border border-primary rounded-full"
                src={photoURL}
                alt=""
              />
            ) : (
              <FaUserAlt className="text-3xl text-primary rounded-full border border-primary" />
            )}
          </div>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={onClickLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
