import type { ReactNode } from "react";
import { Portal } from "./Portal";
import { Center, Container } from "@mantine/core";

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  type?: string;
  ariaLabel?: string;
  className?: string;
}
// TODO: Modal could be styled differently for different types
const Modal = ({
  children,
  isOpen,
  setIsOpen,
  type,
  ariaLabel,
  className,
}: Props) => {
  return (
    <Portal wrapperId="modal-wrapper">
      <div
        className="modal-overlay"
        aria-labelledby={ariaLabel ?? "modal-title"}
        role="dialog"
        aria-modal="true"
        onClick={() => setIsOpen(false)}
      ></div>
      <Center className="modal-container">
        <Container className={`${className} modal-content`}>
          {children}
        </Container>
      </Center>
    </Portal>
  );
};
export default Modal;
