import { Modal } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FoundationForm } from "../../foundations/components/FoundationForm";
import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import {
  resFoundationHeaders,
  useGetFoundationsHeadersQuery,
} from "../../store/fundations/foundation.api";
import { LoadingPage } from "../pages/LoadingPage";
import SideBarItem from "./SideBarItem";

export const SideBar = () => {
  const { rol } = useAuth();
  const { isShowing, closeModal, openModal } = useModal();

  const { pathname } = useLocation();
  const { data: foundationNames, isLoading } = useGetFoundationsHeadersQuery();

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <div className="bg-white w-full p-6 rounded-md font-semibold shadow-sm shadow-paragraph">
        <h1 className="font-semibold text-2xl">Fundaciones</h1>
        {foundationNames?.map((item: resFoundationHeaders) => (
          <SideBarItem key={item.name} {...item} />
        ))}
      </div>
      {rol === "superadmin" && !pathname.includes("edit") && (
        <button
          className="mt-4 p-3 w-full flex items-center justify-center group relative overflow-hidden rounded-lg bg-white text-lg shadow"
          onClick={openModal}
        >
          <div className="absolute inset-0 w-[7%] bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white flex justify-center items-center gap-2">
            <IoMdAdd className="" />
            Crear nueva fundación
          </span>
        </button>
      )}
      <Modal
        open={isShowing}
        onClose={closeModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-3/4 flex">
          <FoundationForm close={closeModal} />
          <button
            className="text-primary self-start -ml-8 text-5xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      </Modal>
      {/* <Modal isShowing={isShowing} closeModal={closeModal}>
      </Modal> */}
    </>
  );
};
