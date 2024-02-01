function TodoItem({ todo }) {
  const deleteHandle = () => {};

  const editHandle = () => {};

  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title} - {todo.id}
      </span>
      <button onClick={editHandle}>Düzenle</button>
      <button onClick={deleteHandle}>Sil</button>
    </li>
  );
}

export default TodoItem;
