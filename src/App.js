import { useState } from "react";
import Header from "./todo/header";
import TodoList from "./todo/list";
import AddTodo from "./todo/add";

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState("tr"); //todo
  const [dark, setDark] = useState(true); //todo

  return (
    <main>
      <Header user={user} setUser={setUser} />
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
