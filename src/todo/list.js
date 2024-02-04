import TodoItem from "./item";
//global olarak kullanmak istersek
import { useSelector } from "react-redux";

function TodoList({ setModal }) {
  const { todos } = useSelector((state) => state.todo);
  const { user } = useSelector((state) => state.auth);

  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} user={user} setModal={setModal} />
      ))}
    </ul>
  );
}

export default TodoList;
