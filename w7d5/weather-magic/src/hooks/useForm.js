import { useState } from "react";

export default function useForm(fields, action) {
  const [formData, setFormData] = useState(fields);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });

    // const newFormData = {...formData}
    // newFormData[name] = value
    // setFormData(newFormData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    action(formData);
    setFormData(fields);
  };

  return { formData, handleChange, handleSubmit };
}
