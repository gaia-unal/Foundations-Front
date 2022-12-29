import { Modal } from "@mui/material";
import { borderRadius } from "@mui/system";
import { IoMdAdd } from "react-icons/io";
// import { Modal } from "../../common/components/Modal";
import { FoundationForm } from "../../foundations/components/FoundationForm";
import { useModal } from "../../hooks/useModal";
import SideBarItem, { SideBarItemProps } from "./SideBarItem";

const Items: SideBarItemProps[] = [
  { name: "Fundacion 1" },
  { name: "Fundacion 2" },
  { name: "Fundacion 3" },
];

export const SideBar = () => {
  const { isShowing, closeModal, openModal } = useModal();

  return (
    <>
      <div className="bg-white w-full p-6 rounded-md font-semibold shadow-sm shadow-paragraph">
        <h1 className="font-semibold text-2xl">Fundaciones</h1>
        {Items.map((item) => (
          <SideBarItem key={item.name} {...item} />
        ))}
      </div>
      <button
        className="mt-4 p-3 w-full flex items-center justify-center group relative overflow-hidden rounded-lg bg-white text-lg shadow"
        onClick={openModal}
      >
        <div className="absolute inset-0 w-4 bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white flex justify-center items-center gap-2">
          <IoMdAdd className="" />
          Crear nueva fundación
        </span>
      </button>
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
          <FoundationForm />
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
