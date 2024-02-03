import { useState } from "react";
import Header from "./todo/header";
import TodoList from "./todo/list";
import AddTodo from "./todo/add";
import Modal from "./todo/modal";

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState("tr"); //todo
  const [dark, setDark] = useState(true); //todo
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <main>
      {modal && (
        <Modal name={modal.name} data={modal.data} closeModal={closeModal} />
      )}
      <Header user={user} setUser={setUser} />
      <AddTodo setTodos={setTodos} user={user} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        user={user}
        setModal={setModal}
      />
    </main>
  );
}

export default App;
