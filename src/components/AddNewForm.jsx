import React, { useEffect, useState, useCallback } from "react";
import validator from "validator";

function AddNewForm() {
  const [newUser, setNewUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [isValid, setIsValid] = useState(false);

  const formValidator = useCallback(() => {
    if (!validator.isNumeric(newUser.id)) return false;
    if (!validator.isEmpty(newUser.firstName)) return false;
    if (!validator.isEmpty(newUser.lastName)) return false;
    if (!validator.isEmail(newUser.email)) return false;
    return true;
  }, [newUser]);

  const onInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsValid(formValidator());
  }, [newUser, formValidator]);

  return (
    <div className="new-user">
      <h2 className="new-user__title">Добавление нового пользователя</h2>
      <form className="new-user__form">
        <input
          onChange={onInputChange}
          type="number"
          name="id"
          placeholder="id"
          className="new-user__input"
        />
        <input
          onChange={onInputChange}
          type="text"
          name="firstname"
          placeholder="firstname"
          className="new-user__input"
        />
        <input
          onChange={onInputChange}
          type="text"
          name="lastname"
          placeholder="lastname"
          className="new-user__input"
        />
        <input
          onChange={onInputChange}
          type="text"
          name="email"
          placeholder="email"
          className="new-user__input"
        />
        <input
          onChange={onInputChange}
          type="tel"
          name="phone"
          placeholder="(000)000-0000"
          pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
          className="new-user__input"
        />
        <button disabled={!isValid} type="submit" className="btn">
          Добавить в таблицу
        </button>
      </form>
    </div>
  );
}

export default AddNewForm;
