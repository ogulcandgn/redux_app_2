import { useSelector, UseSelector } from "react-redux";

function EditTodo({ data, close }) {
  return (
    <div>
      edit todo modalı <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={close}>Kapat</button>
    </div>
  );
}

export default EditTodo;
