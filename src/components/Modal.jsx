import { useEffect } from "react";

const Modal = ({ onClose, isOpen }) => {
  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);
  return (
    <div
      className="fixed inset-0 z-10 h-full w-full bg-[rgb(0,0,0,0.5)]"
      onClick={onClose}>
      <div
        className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-8 rounded-xl bg-white p-10"
        onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-3xl font-semibold"
          onClick={onClose}>
          &times;
        </button>
        <p className="text-xl font-medium">
          Your order has been sended successfully!
        </p>
        <button
          onClick={onClose}
          className="bg-royal hover:bg-persian flex h-11 w-39 items-center justify-center self-center rounded-xl px-[51px] text-base leading-5 font-semibold text-white transition-colors duration-300 ease-in-out">
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
