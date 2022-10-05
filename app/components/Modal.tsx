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
        aria-labelledby={ariaLabel ?? "modal-title"}
        role="dialog"
        aria-modal="true"
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>
      <Center
        style={{
          position: "fixed",
          display: "flex",
          left: "28%",
          top: "10%",
          width: "42%",
          height: "75%",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "100vh",
          overflow: "hidden",
          textAlign: "center",
          backgroundColor: "white",
          border: "1px solid white",
          borderRadius: "40px",
        }}
      >
        <Container
          className={className}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5%",
            width: "100%",
          }}
        >
          {children}
        </Container>
      </Center>
    </Portal>
  );
};
export default Modal;
