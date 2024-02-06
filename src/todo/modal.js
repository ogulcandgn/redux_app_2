import modals from "../modals";
import { useSelector } from "react-redux";

function Modal() {
  const { name, data } = useSelector((state) => state.modal);
  const modal = modals.find((m) => m.name === name);

  return (
    <div>
      <modal.element />
    </div>
  );
}

export default Modal;
