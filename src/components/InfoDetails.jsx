import React from "react";
import PropTypes from "prop-types";

function InfoDetails(props) {
  const { selectedRow } = props;

  if (!selectedRow || Object.keys(selectedRow).length === 0) {
    return null;
  }

  return (
    <div className="details-block">
      <div className="details-block__content">
        <p>
          Выбран пользователь{" "}
          <b>{`${selectedRow.firstName} ${selectedRow.lastName}`}</b>
        </p>
        <p>Описание:</p>
        <textarea readOnly value={selectedRow.description} />
        <p>
          Адрес проживания: <b>{selectedRow.address.streetAddress}</b>
        </p>
        <p>
          Город: <b>{selectedRow.address.city}</b>
        </p>
        <p>
          Провинция/штат: <b>{selectedRow.address.state}</b>
        </p>
        <p>
          Индекс: <b>{selectedRow.address.zip}</b>
        </p>
      </div>
    </div>
  );
}

InfoDetails.defaultProps = {
  selectedRow: {},
};

InfoDetails.propTypes = {
  selectedRow: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.shape({
      streetAddress: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
    }),
    description: PropTypes.string,
  }),
};

export default InfoDetails;
