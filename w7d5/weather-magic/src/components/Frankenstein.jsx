import useCounter from "../hooks/useCounter";
import useForm from "../hooks/useForm";

export default function Frankenstein(props) {
  const fields = { chicken: "" };
  const { count, increment, decrement, reset } = useCounter(5);
  const { formData, handleChange, handleSubmit } = useForm(fields, console.log);

  return (
    <div>
      <h1>Frankenstein</h1>
      <p onClick={() => increment(1)}>{count}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="chicken"
          value={formData.chicken}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
