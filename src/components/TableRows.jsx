import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import TableSingleRow from "./TableSingleRow";

function TableRows(props) {
  const { list, setSelectedRow, setIsDetailsVisible } = props;
  return (
    <tbody>
      {list.map((row) => (
        <TableSingleRow
          key={shortid.generate()}
          row={row}
          setSelectedRow={setSelectedRow}
          setIsDetailsVisible={setIsDetailsVisible}
        />
      ))}
    </tbody>
  );
}

TableRows.defaultProps = {
  list: [],
};

TableRows.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  setSelectedRow: PropTypes.func.isRequired,
  setIsDetailsVisible: PropTypes.func.isRequired,
};

export default TableRows;
