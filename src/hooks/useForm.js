import { useState, useEffect } from 'react'

export default function useForm(initialForm = {}) {
  const [formState, setFormState] = useState(initialForm)

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
