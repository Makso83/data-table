import React from "react";

function Modal(props) {
  const { toggleModal } = props;
  return (
    <div className="modal">
      <div className="modal_background" />
      <div className="modal_content">
        {props.children}
        <button
          className="btn modal__button"
          type="button"
          onClick={toggleModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Modal;
