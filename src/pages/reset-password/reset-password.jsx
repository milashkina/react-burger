import globalStyle from "../../components/app/app.module.css";
import {Button,  Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {INPUT, PATH, SIZE} from "../../utils/constant";
import {postResetPassword} from "../../services/reducers/access";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../utils/useForm";
import {useRef} from "react";


export function ResetPasswordPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {forgotPasswordSuccess, resetPasswordSuccess, isAuth} = useSelector(state => state.access)
  const onSubmit = () => {
    dispatch(postResetPassword(formValue))
  }
  const [formValue, handleChange, handleSubmit] = useForm(onSubmit)
  const inputRef = useRef(null)
  const onClickLogin = () => {
    navigate(PATH.LOGIN)
  }
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
  }
  if(!forgotPasswordSuccess) {
    navigate(PATH.FORGOT_PASSWORD)
  } else if (resetPasswordSuccess) {
    return (
      navigate(PATH.LOGIN)
    )
  } else if (isAuth) {
    return (
      navigate(PATH.HOME)
    )
  }

  return(
    <form className={`${globalStyle.columnGrid} + mt-20`} onSubmit={handleSubmit}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <PasswordInput
        onChange={handleChange}
        value={formValue.password || ''}
        placeholder={'Введите новый пароль'}
        name={'password'}
      />
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={handleChange}
        value={formValue.token || ''}
        name={INPUT.NAME.CODE}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1"
      />
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-10">
        Сохранить
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
