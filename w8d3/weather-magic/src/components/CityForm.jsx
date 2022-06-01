import { useState } from "react";

export default function CityForm(props) {
  const baseForm = { city: "" };
  const [formData, setFormData] = useState(baseForm);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData.city);
    setFormData(baseForm);
  };

  return (
    <form onSubmit={handleSubmit} className="CityForm">
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City name"
      />
      <button type="submit">Search weather</button>
    </form>
  );
}
