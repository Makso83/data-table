import React, { useState } from "react";
import { SMALL_SET, LARGE_SET } from "../config";
import TableApp from "./TableApp";

function AppMain() {
  const [selectedData, setSelectedData] = useState(null);

  const onRAdioHandler = (e) => {
    setSelectedData(e.target.value);
  };

  return (
    <>
      {selectedData === null ? (
        <div className="welcom-form">
          <h1>Выберите объем загружаемых данных</h1>
          <form className="data-select-form">
            <label htmlFor="small" className="btn">
              Малый объем
              <input
                type="radio"
                name="dataSelect"
                id="small"
                value={SMALL_SET}
                onClick={onRAdioHandler}
                className="data-select-form__radiobutton"
              />
            </label>
            <label htmlFor="large" className="btn">
              Большой объем
              <input
                type="radio"
                name="dataSelect"
                id="large"
                value={LARGE_SET}
                onClick={onRAdioHandler}
                className="data-select-form__radiobutton"
              />
            </label>
          </form>
        </div>
      ) : (
        <TableApp set={selectedData} />
      )}
    </>
  );
}

export default AppMain;
