import globalStyle from "../../components/app/app.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Navigate, useNavigate} from "react-router-dom";
import {INPUT, PATH, SIZE} from "../../utils/constant";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postLogin} from "../../services/reducers/access";


export function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.access.isAuth)
  const [ formValue, setFormValue ] = useState({
    email: '',
    password: '',
  })
  const onClickRegister = () => {
    navigate(PATH.REGISTER)
  }
  const onClickForgot = () => {
    navigate(PATH.FORGOT_PASSWORD)
  }

  const onFormChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(postLogin(formValue))
  }
  if (isAuth) {
    return (
      <Navigate to={PATH.HOME} replace />
    )
  }

  return(
    <form className={`${globalStyle.columnGrid} + mt-20`} onSubmit={(e) => onSubmit(e)}>
      <p className="text text_type_main-medium">Вход</p>
      <EmailInput
        onChange={(e) => onFormChange(e)}
        value={formValue.email}
        name={INPUT.NAME.EMAIL}
        isIcon={false}
      />
      <PasswordInput
        onChange={(e) => onFormChange(e)}
        value={formValue.password}
        name={INPUT.NAME.PASSWORD}
      />
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-10">
        Войти
      </Button>
      <div className={`${globalStyle.formTipContainer}`}>
        <span className="text text_type_main-default text_color_inactive">Вы - новый пользователь?
          <Button htmlType="button" type="secondary" size={SIZE.MEDIUM} onClick={onClickRegister}>
            Зарегистрироваться
          </Button>
        </span>
        <span className="text text_type_main-default text_color_inactive">Забыли пароль?
          <Button htmlType="button" type="secondary" size={SIZE.MEDIUM} onClick={onClickForgot}>
            Восстановить пароль
          </Button>
        </span>
      </div>
    </form>
  )
}
