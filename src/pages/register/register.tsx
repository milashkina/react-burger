import globalStyle from '../../../src/components/app/app.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FormEvent, useRef, useState} from "react";
import {INPUT, PATH, SIZE} from "../../utils/constant";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "../../services/hook";
import {postRegisterThunk, postLoginThunk} from "../../services/actions/entries";


export const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postRegisterThunk(formValue))
    dispatch(postLoginThunk(formValue))
  }

  const [ formValue, setFormValue ] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const inputRef = useRef<HTMLInputElement>(null)

  const onIconClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }

  const onClick = () => {
    navigate(PATH.LOGIN)
  }

  return(
    <>
      <form className={`${globalStyle.columnGrid} + mt-20`} onSubmit={onSubmit}>
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
