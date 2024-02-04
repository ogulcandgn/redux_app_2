import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo } from "../stores/todo";
import { useSelector } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [todo, setTodo] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: todo,
        done: false,
        id: nanoid(),
        user: user.id,
      })
    );
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
      {/* user yada todo yoksa ekleme olmayacak */}
      <button disabled={!todo || !user} type="submit">
        Ekle
      </button>
    </form>
  );
}

export default AddTodo;
