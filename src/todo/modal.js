function Modal({ name, data, closeModal }) {
  return (
    <div>
      modal içeriği
      <button onClick={closeModal}>Modalı kapat</button>
    </div>
  );
}

export default Modal;
