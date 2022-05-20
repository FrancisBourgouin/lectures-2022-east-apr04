import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const fields = { city: "", country: "" };
  const { formData, handleChange, handleSubmit } = useForm(fields, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        onChange={handleChange}
        value={formData.city}
        placeholder="City Name"
      />
      <input
        type="text"
        name="country"
        onChange={handleChange}
        value={formData.country}
        placeholder="Country Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
