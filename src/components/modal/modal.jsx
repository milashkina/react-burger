import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../modal/modal.module.css'
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import {createPortal} from "react-dom";
import {useEffect} from "react";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

export const Modal = (props) => {

  const btnEsc = (e) => {
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
                <div className={`${style.iconClose}`} onClick={props.onClose}>
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  children: PropTypes.element,
}

