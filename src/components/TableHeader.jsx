import React from "react";
import { tableheaders } from "../config";
import TableHeaderSingleTD from "./TableHeaderSingleTD";

function TableHeader(props) {
  const { sortingType, onSortFieldSelect } = props;

  return (
    <thead className="main-table__header">
      <tr>
        {tableheaders.map((h) => (
          <TableHeaderSingleTD
          key={h}
            h={h}
            sortingType={sortingType}
            onSortFieldSelect={onSortFieldSelect}
          />
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
