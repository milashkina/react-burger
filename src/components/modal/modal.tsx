import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../modal/modal.module.css'
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import {createPortal} from "react-dom";
import React, {useEffect} from "react";

const modalRoot  = document.getElementById("react-modals") as HTMLElement;

interface IModal {
  header?: string,
  onClose: () => void,
}

export const Modal = (props : React.PropsWithChildren<IModal>) => {

  const btnEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape'){
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', btnEsc)
    return (() => {
      document.removeEventListener('keydown', btnEsc)
    })
  }, []) // eslint-disable-line


    return createPortal(
      (
        <>
          <ModalOverlay onClose={props.onClose}>
            <div className={`${style.modalWrap} + p-10`} onClick={(e) => {e.stopPropagation()}}>
              <div className={`${style.heading}`}>
                <span className={`text text_type_main-large pr-9`}>{props.header}</span>
                <div className={`${style.iconClose}`} onClick={props.onClose} data-test={'close_modal_details_icon'}>
                  <CloseIcon type="primary" />
                </div>
              </div>
              {props.children}
            </div>
            </ModalOverlay>
        </>
      ),
      modalRoot
    );
}


