import React, {FormEvent, useEffect, useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {PATH, SIZE} from "../../utils/constant";
import globalStyle from "../../components/app/app.module.css";
import {useDispatch, useSelector} from "react-redux";
import {postForgotPassword} from "../../services/reducers/access";


export function ForgotPasswordPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSuccess = useSelector((state: any) => state.access.forgotPasswordSuccess)
    const [ formValue, setFormValue ] = useState({
        email: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ((formValue as {email: string}).email === '') {
            alert('Введите имейл для восстановления пароля')
        } else {
            dispatch<any>(postForgotPassword(formValue))
        }
    }
      const onClickLogin = () => {
        navigate(PATH.LOGIN)
      }

      useEffect(() => {
        if (isSuccess) {
          navigate(PATH.RESET_PASSWORD)
        }
      }, [isSuccess]); // eslint-disable-line

      return (
         <form className={`${globalStyle.columnGrid} + mt-20`} onSubmit={handleSubmit}>
           <p className="text text_type_main-medium">Восстановление пароля</p>
           <EmailInput
             onChange={handleChange}
             value={(formValue as {email: string}).email || ''}
             name={'email'}
             isIcon={false}
           />
           <Button htmlType="submit" type="primary" size={SIZE.MEDIUM} extraClass="mb-10">
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
