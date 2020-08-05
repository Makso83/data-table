import React, { useState } from "react";
import Modal from "./Modal";
import AddNewForm from "./AddNewForm";

function AddNewRow() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button type="button" onClick={toggleModal} className="btn">
        Добавить
      </button>
      {showModal ? (
        <Modal toggleModal={toggleModal}>
          <AddNewForm />
        </Modal>
      ) : null}
    </div>
  );
}

export default AddNewRow;
