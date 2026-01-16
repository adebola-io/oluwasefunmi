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

  return (
    <dialog
      ref={dialogRef}
      class={[
        classes.modal,
        { [classes.fillScreenOnMobile]: fillScreenOnMobile },
      ]}
      onClose={onClose}
      onClick--self={onClose}
    >
      <div class={classes.modalCard}>{children}</div>
    </dialog>
  );
};
