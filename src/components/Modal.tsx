import { FunctionComponent } from "react";

interface ModalProps {
  children: React.ReactNode;
  isShowing: boolean;
  closeModal: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  isShowing,
  closeModal,
}) => {
  return (
    <div
      className={`fixed inset-0 h-screen w-screen bg-black opacity-80 ${
        !isShowing
          ? "hidden"
          : "flex justify-center items-center content-center"
      }`}
      onClick={closeModal}
    >
      <div
        className="p-6 bg-white rounded-md flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="text-primary self-start -mt-6 -mr-6 p-2 text-5xl"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
