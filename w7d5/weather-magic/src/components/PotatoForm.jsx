import useForm from "../hooks/useForm";

export default function PotatoForm(props) {
  const fields = { favorite: "" };
  const { formData, handleChange, handleSubmit } = useForm(fields, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <h1>What is your favorite potato</h1>
      <input
        type="text"
        name="favorite"
        onChange={handleChange}
        value={formData.favorite}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
