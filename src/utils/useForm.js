import {useState} from "react";


export const useForm = submitCallback => {

  const [formValue , setFormValue ] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    submitCallback()
  }
  const handleChange = e => {
    e.persist()
    setFormValue(formValue => ({ ...formValue, [e.target.name]: e.target.value }))
  }

  return [ formValue, handleChange, handleSubmit]
}
