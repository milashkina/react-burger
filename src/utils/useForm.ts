import React, {FormEvent, useState} from "react";


export const useForm = () => {

  const [formValue , setFormValue ] = useState({})

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setFormValue(formValue => ({ ...formValue, [e.target.name]: e.target.value }))
  }

  return [ formValue, handleChange, handleSubmit]
}
