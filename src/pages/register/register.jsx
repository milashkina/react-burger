import globalStyle from '../../../src/components/app/app.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useRef} from "react";
import {INPUT, PATH, SIZE} from "../../utils/constant";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {postLogin, postRegister} from "../../services/reducers/access";
import {useForm} from "../../utils/useForm";


export function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = () => {
    dispatch(postRegister(formValue))
    dispatch(postLogin(formValue.email , formValue.password))
  }
  const [formValue, handleChange, handleSubmit] = useForm(onSubmit)
  const inputRef = useRef(null)

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
  }

  const onClick = () => {
    navigate(PATH.LOGIN)
  }

  return(
    <>
      <form className={`${globalStyle.columnGrid} + mt-20`} onSubmit={handleSubmit}>
        <p className="text text_type_main-medium">Регистрация</p>
        <Input
          type={INPUT.TYPE.TEXT}
          placeholder={INPUT.PLACEHOLDER.NAME}
          onChange={handleChange}
          value={formValue.name || ''}
          name={INPUT.NAME.NAME}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          size={SIZE.DEFAULT}
        />
        <EmailInput
          onChange={handleChange}
          value={formValue.email || ''}
          name={INPUT.NAME.EMAIL}
          isIcon={false}
        />
        <PasswordInput
          onChange={handleChange}
          value={formValue.password || ''}
          name={INPUT.NAME.PASSWORD}
        />
        <Button htmlType="submit" type="primary" size={SIZE.MEDIUM} extraClass="mb-10">
          Зарегистрироваться
        </Button>
      </form>
      <div className={`${globalStyle.formTipContainer}`}>
        <span className="text text_type_main-default text_color_inactive">Уже зарегистрированны?
          <Button htmlType="button" type="secondary" size={SIZE.MEDIUM} onClick={onClick}>
            Войти
          </Button>
        </span>
      </div>
    </>
  )
}
