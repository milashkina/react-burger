import globalStyle from "../../components/app/app.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Navigate, useNavigate} from "react-router-dom";
import {INPUT, PATH, SIZE} from "../../utils/constant";
import {useDispatch, useSelector} from "react-redux";
import {postLogin} from "../../services/reducers/access";
import React, {useState} from "react";


export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector((state: any) => state.access.isAuth)
  const onSubmit = () => {
    dispatch<any>(postLogin(formValue))
  }

    const [ formValue, setFormValue ] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

  const onClickRegister = () => {
    navigate(PATH.REGISTER)
  }
  const onClickForgot = () => {
    navigate(PATH.FORGOT_PASSWORD)
  }

  if (isAuth) {
    return (
      <Navigate to={PATH.HOME} replace />
    )
  }

  return(
    <form className={`${globalStyle.columnGrid} + mt-20`} onSubmit={onSubmit}>
      <p className="text text_type_main-medium">Вход</p>
      <EmailInput
        onChange={handleChange}
        value={formValue.email}
        name={INPUT.NAME.EMAIL}
        isIcon={false}
      />
      <PasswordInput
        onChange={handleChange}
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
