import { Cell, useObserver } from "retend";
import type { JSX } from "retend/jsx-runtime";
import classes from "./Modal.module.css";

export interface ModalProps {
  isOpen: Cell<boolean>;
  onClose: () => void;
  children: JSX.Template;
  fillScreenOnMobile?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, fillScreenOnMobile } = props;
  const observer = useObserver();
  const dialogRef = Cell.source<HTMLDialogElement | null>(null);

  // Sync dialog open/close with isOpen cell
  isOpen.listen((open) => {
    const dialog = dialogRef.get();
    if (!dialog) return;

    if (open && !dialog.open && dialog.isConnected) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      setTimeout(dialog.close);
    }
  });

  const handleClose = () => {
    onClose();
  };

  observer.onConnected(dialogRef, (dialog) => {
    if (isOpen.get()) {
      console.log("modal opened ");
      dialog.showModal();
    }
  });

  console.log({ children });

  return (
    <dialog
      ref={dialogRef}
      class={[classes.modal, fillScreenOnMobile && classes.fillScreenOnMobile]}
      onClose={handleClose}
    >
      <div class={classes.modalCard}>{children}</div>
    </dialog>
  );
};
