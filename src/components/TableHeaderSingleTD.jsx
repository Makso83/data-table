import React from "react";

function TableHeaderSingleTD(props) {
  const { h, sortingType, onSortFieldSelect } = props;
  const sortClassName = () => {
    if (h === sortingType.field) {
      return sortingType.reversed ? 'active-sort--reversed' : 'active-sort'
    }
    return null
  }
  const sortTypeClass =sortClassName();
  return (
    <td key={h} onClick={() => onSortFieldSelect(h)}>
      <p className={sortTypeClass}>{h}</p>
    </td>
  );
}

export default TableHeaderSingleTD;
