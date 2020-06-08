import { useState } from 'react'

export const useForm = initialValues => {
    const [form, setForm] = useState(initialValues)

    const onChange = (name, value) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const resetValues = () => {
        setForm(initialValues)
    }

    return { form, onChange, resetValues }
}