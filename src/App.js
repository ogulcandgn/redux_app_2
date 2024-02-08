import { useState } from "react";
import Header from "./todo/header";
import TodoList from "./todo/list";
import AddTodo from "./todo/add";
import Modal from "./todo/modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const [language, setLanguage] = useState("tr");
  const [dark, setDark] = useState(true); //todo

  const dispatch = useDispatch();
  const { open: isModalOpen } = useSelector((state) => state.modal);

  return (
    <main>
      {isModalOpen && <Modal />}
      <Header />
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
