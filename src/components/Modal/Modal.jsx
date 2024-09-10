import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import cn from "classnames";

export const Modal = ({ children, mode, onClose }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(
    <div
      className={cn(css.modal, {
        [css.visible]: mode,
      })}
    >
      <div className={css.background}>
        <div className={css.window}>
          {children}
          <button type="button" onClick={() => onClose()}>
            Close modal
          </button>
        </div>
      </div>
    </div>,
    elRef.current
  );
};
