import style from '../modal-overlay/modal-overlay.module.css'
import PropsTypes from 'prop-types'
export const ModalOverlay = (props) => {

  return (
    <div className={`${style.overlay}`} onClick={props.onClose}>{props.children}</div>
  )
}

ModalOverlay.PropsTypes = {
  onClose: PropsTypes.func,
  children: PropsTypes.element,
}
