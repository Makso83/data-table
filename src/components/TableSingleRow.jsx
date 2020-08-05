import React from "react";
import PropTypes from "prop-types";

function TableSingleRow(props) {
  const { row, setSelectedRow, setIsDetailsVisible } = props;

  const onRowClickHandler = () => {
    setSelectedRow(row);
    setIsDetailsVisible(true);
  };

  return (
    <tr onClick={onRowClickHandler} className="main-table__row">
      <td>{row.id}</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.email}</td>
      <td>{row.phone}</td>
    </tr>
  );
}

TableSingleRow.defaultProps = {
  row: {},
};

TableSingleRow.propTypes = {
  row: PropTypes.shape({
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
  setSelectedRow: PropTypes.func.isRequired,
  setIsDetailsVisible: PropTypes.func.isRequired,
};

export default TableSingleRow;
