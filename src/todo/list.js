import TodoItem from "./item";

function TodoList({ todos, user }) {
  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} user={user} />
      ))}
    </ul>
  );
}

export default TodoList;
