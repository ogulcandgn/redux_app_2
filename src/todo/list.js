import TodoItem from "./item";
//global olarak kullanmak istersek
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state.todo);
  const { user } = useSelector((state) => state.auth);

  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} user={user} />
      ))}
    </ul>
  );
}

export default TodoList;
