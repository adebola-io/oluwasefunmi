import { Cell, useObserver } from "retend";
import type { JSX } from "retend/jsx-runtime";
import classes from "./Modal.module.css";

export interface ModalProps {
  isOpen: Cell<boolean>;
  onClose: () => void;
  children: JSX.Template;
  fillScreenOnMobile?: JSX.ValueOrCell<boolean>;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, fillScreenOnMobile } = props;
  const observer = useObserver();
  const dialogRef = Cell.source<HTMLDialogElement | null>(null);

  isOpen.listen((open) => {
    const dialog = dialogRef.get();
    if (!dialog) return;

    if (open && !dialog.open && dialog.isConnected) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      setTimeout(dialog.close);
    }
  });

  observer.onConnected(dialogRef, (dialog) => {
    if (isOpen.get()) dialog.showModal();
  });

  const handleClose = () => onClose();

  return (
    <dialog
      ref={dialogRef}
      class={[
        classes.modal,
        "fixed inset-0 w-full h-full max-w-full max-h-full m-0 p-0 border-none bg-transparent text-white",
        "open:flex open:items-center open:justify-center backdrop:bg-black/50",
      ]}
      onClose={handleClose}
    >
      <div
        class={[
          "relative max-w-[90vw] max-h-[90vh] rounded-2xl bg-[#0c0c0c]/95 shadow-2xl ring-1 ring-white/40",
          {
            "max-md:w-full max-md:h-full max-md:max-w-full max-md:max-h-full max-md:rounded-none":
              fillScreenOnMobile,
          },
        ]}
      >
        {children}
      </div>
    </dialog>
  );
};
