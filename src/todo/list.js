import TodoItem from "./item";

function TodoList({ setTodos, todos, user, setModal }) {
  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem
          key={key}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
          user={user}
          setModal={setModal}
        />
      ))}
    </ul>
  );
}

export default TodoList;
