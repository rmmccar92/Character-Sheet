// Modal Component
import type { ReactNode, FC } from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: ReactNode;
  wrapperId: string;
}

const createWrapper = (wrapperId: string) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};

export const Portal: FC<Props> = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null);
  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;
    if (!element) {
      created = true;
      element = createWrapper(wrapperId);
    }
    setWrapper(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  if (wrapper === null) return null;
  return createPortal(children, wrapper);
};
