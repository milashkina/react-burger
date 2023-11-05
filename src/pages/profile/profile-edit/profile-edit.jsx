import style from "../profile.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT, SIZE} from "../../../utils/constant";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {patchUser} from "../../../services/reducers/access";


export function ProfileEdit() {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const { name, email } = useSelector(state => state.access.user)
  // TODO: переписать с использованием хука useForm. Для этого нужно добавить в хук обработчик события handleCancel. Пока не понимаю как это сделать
  const [ formValue, setFormValue ] = useState({
    name: name,
    email: email,
    password: '',
  })

  const isChange = name !== formValue.name || email !== formValue.email || formValue.password !== ''

  const onFormChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(patchUser(formValue))
  }
  const onCancel = (e) => {
    e.preventDefault()
    setFormValue({
      name: name,
      email: email,
      password: ''
    })
  }

  return (
    <form className={`${style.editLayout}`} onSubmit={(e) => onSubmit(e)}>
      <Input
        onChange={(e) => onFormChange(e)}
        onIconClick={() => inputRef.current.focus()}
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
        onChange={(e) => onFormChange(e)}
        value={formValue.email}
        name={INPUT.NAME.EMAIL}
        isIcon={true}
      />
      <PasswordInput
        onChange={(e) => onFormChange(e)}
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
