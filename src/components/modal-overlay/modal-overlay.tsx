import style from '../modal-overlay/modal-overlay.module.css'
import React from "react";

interface IModalOverlay {
  onClose: () => void,
}
export const ModalOverlay = (props: React.PropsWithChildren<IModalOverlay>) => {

  return (
    <div className={`${style.overlay}`} onClick={props.onClose}>{props.children}</div>
  )
}
