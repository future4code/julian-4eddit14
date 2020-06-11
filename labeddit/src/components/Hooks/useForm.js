import { useState } from 'react'

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
  
    const onChange = (event) => {
      const newValue = event.target.value
      const fieldName = event.target.name
  
      setForm({...form, [fieldName]: newValue})
    }

    const resetValues = () => {
        setForm(initialState)
    }

    return { form, onChange, resetValues }
}