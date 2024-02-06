import { deleteTodo } from "../stores/todo";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../stores/modal";

function TodoItem({ todo }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {
    dispatch(
      openModal({
        name: "edit-todo",
        data: todo,
      })
    );
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
