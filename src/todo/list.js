import TodoItem from "./item";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
