import { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ setTodos }) {
  const [todo, setTodo] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      {
        title: todo,
        done: false,
        id: nanoid(),
        user: 1,
      },
      ...todos,
    ]);
    setTodo("");
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="değer giriniz"
      />
      <button disabled={!todo} type="submit">
        Ekle
      </button>
    </form>
  );
}

export default AddTodo;
