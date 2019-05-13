import { useState } from "react"

export function useFormFields(callback) {
  const [values, setValues] = useState({})
  function handleChange(event) {
    event.persist()
    const {
      target: { name, type, checked, value },
    } = event
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  return {
    values,
    handleChange,
  }
}
export default useFormFields
