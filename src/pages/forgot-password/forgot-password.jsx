import React, {useEffect, useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {PATH, SIZE} from "../../utils/constant";
import globalStyle from "../../components/app/app.module.css";
import {useDispatch, useSelector} from "react-redux";
import {postForgotPassword} from "../../services/reducers/access";


export function ForgotPasswordPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSuccess = useSelector(state => state.access.forgotPasswordSuccess)
  const [formValue, setFormValue] = useState({
    email: '',
  })
  const onClickLogin = () => {
    navigate(PATH.LOGIN)
  }
  const onChangeValue = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (isSuccess) {
      navigate(PATH.RESET_PASSWORD)
    }
  }, [isSuccess]); // eslint-disable-line

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(postForgotPassword(formValue))
  }

  return (
     <form className={`${globalStyle.columnGrid} + mt-20`} onSubmit={(e) => onSubmit(e)}>
       <p className="text text_type_main-medium">Восстановление пароля</p>
       <EmailInput
         onChange={(e) => onChangeValue(e)}
         value={formValue.email}
         name={'email'}
         isIcon={false}
       />
       <Button htmlType="submit" type="primary" size="medium" extraClass="mb-10">
         Восстановить
       </Button>
       <div className={`${globalStyle.formTipContainer}`}>
         <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?
           <Button htmlType="button" type="secondary" size={SIZE.MEDIUM} onClick={onClickLogin}>
              Войти
           </Button>
         </span>
       </div>
     </form>
  )
}
