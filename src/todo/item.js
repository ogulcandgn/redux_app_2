import { deleteTodo } from "../stores/todo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TodoItem({ todo, setModal }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {
    setModal({
      name: "edit-todo",
      data: todo,
    });
  };

  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title} - {todo.user}
      </span>

      {todo.user === user.id && (
        <>
          <button onClick={editHandle}>Düzenle</button>
          <button onClick={deleteHandle}>Sil</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
