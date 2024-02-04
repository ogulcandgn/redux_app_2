import TodoItem from "./item";
//global olarak kullanmak istersek
import { useDispatch } from "react-redux";

function TodoList({ user, setModal }) {
  const { todos } = useDispatch((state) => state.todo);

  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} user={user} setModal={setModal} />
      ))}
    </ul>
  );
}

export default TodoList;
