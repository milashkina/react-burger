import style from "../profile.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT, SIZE} from "../../../utils/constant";
import React, {FormEvent, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {patchUser} from "../../../services/reducers/access";


export const ProfileEdit = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const { name, email } = useSelector((state: any) => state.access.user)
  const [ formValue, setFormValue ] = useState({
    name: name,
    email: email,
    password: '',
  })

  const isChange = name !== formValue.name || email !== formValue.email || formValue.password !== ''

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch<any>(patchUser(formValue))
  }
  const onCancel = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setFormValue({
      name: name,
      email: email,
      password: ''
    })
  }

  const handleIconClick = (): void => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }


  return (
    <form className={`${style.editLayout}`} onSubmit={(e) => onSubmit(e)}>
      <Input
        onChange={onFormChange}
        onIconClick={handleIconClick}
        ref={inputRef}
        type={INPUT.TYPE.TEXT}
        placeholder={INPUT.PLACEHOLDER.NAME}
        value={formValue.name}
        name={INPUT.NAME.NAME}
        error={false}
        size={SIZE.DEFAULT}
        icon={"EditIcon"}
      />
      <EmailInput
        onChange={onFormChange}
        value={formValue.email}
        name={INPUT.NAME.EMAIL}
        isIcon={true}
      />
      <PasswordInput
        onChange={onFormChange}
        value={formValue.password}
        name={INPUT.NAME.PASSWORD}
        icon="EditIcon"
      />
      {isChange &&
        <section>
          <Button htmlType="reset" type="secondary" size="medium" onClick={(e) => onCancel(e)}>Отмена</Button>
          <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
        </section>
      }
    </form>
  )
}
