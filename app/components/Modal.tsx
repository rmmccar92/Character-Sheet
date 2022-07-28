import type { ReactNode } from "react";
import { useNavigate } from "@remix-run/react";
import { Portal } from "./Portal";

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  ariaLabel?: string;
  className?: string;
}

const Modal = ({ children, isOpen, ariaLabel, className }: Props) => {
  const navigate = useNavigate();
  if (!isOpen) return null;
  return (
    <Portal wrapperId="modal-wrapper">
      <div
        aria-labelledby={ariaLabel ?? "modal-title"}
        role="dialog"
        aria-modal="true"
        onClick={() => navigate("/home")}
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          width: "100%",
          overflowY: "auto",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          maxHeight: "100vh",
          overflow: "scroll",
        }}
      >
        <div className={className} style={{ padding: "5%", margin: "auto" }}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
export default Modal;
