import { useState } from "react";

export default function CoffeeDrinkForm(props) {
  const originalData = {
    time: "",
    amount: 0,
    beans: "",
    technique: "",
  };
  const [formData, setFormData] = useState(originalData);
  const [error, setError] = useState("");
  const { time, amount, beans, technique } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setError("");
    // const updatedFormData = {...formData}
    // const updatedFormData[name] = value
    // setFormData(updatedFormData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!time || !amount || !beans || !technique) {
      return setError("Missing a field!");
    }

    props.onSubmit(formData);
    setFormData(originalData);
  };

  // const parsedInputs = Object.keys(formData).map(key =>
  //   (<input
  //       type="text"
  //       name={key}
  //       placeholder={`Enter ${key}`}
  //       onChange={handleChange}
  //       value={formData[key]}
  //     />)
  //   )

  return (
    <form className="CoffeeDrinkForm" onSubmit={handleSubmit}>
      <p style={{ color: "red" }}>{error}</p>
      <label>Enter bean type</label>
      <input
        type="text"
        name="beans"
        placeholder="Enter bean type"
        onChange={handleChange}
        value={beans}
      />
      <label>Enter technique</label>
      <input
        type="text"
        name="technique"
        placeholder="Enter technique used"
        onChange={handleChange}
        value={technique}
      />
      <label>Enter time</label>
      <input type="datetime-local" name="time" onChange={handleChange} value={time} />
      <label>Enter amount</label>
      <input
        type="number"
        name="amount"
        placeholder="Amount of coffee"
        onChange={handleChange}
        value={amount}
      />
      <button type="submit">Add coffee</button>
    </form>
  );
}
