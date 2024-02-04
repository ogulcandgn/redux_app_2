import TodoItem from "./item";
//global olarak kullanmak istersek
import { useSelector } from "react-redux";

function TodoList({ user, setModal }) {
  const { todos } = useSelector((state) => state.todo);

  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} user={user} setModal={setModal} />
      ))}
    </ul>
  );
}

export default TodoList;
