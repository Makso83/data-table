import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import TableFilter from "./TableFilter";
import TablePagination from "./TablePagination";
import InfoDetails from "./InfoDetails";
import AddNewRow from "./AddNewRow";

function Table(props) {
  const { list } = props;
  const [sortingType, setSortingType] = useState({
    field: "id",
    reversed: false,
  });
  const [sortedList, setSortedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const resetDetails = () => {
    setIsDetailsVisible(false);
    setSelectedRow({});
  }

  const onSortFieldSelect = (newField) => {
    if (newField === sortingType.field) {
      return setSortingType({
        ...sortingType,
        reversed: !sortingType.reversed,
      });
    }
    resetDetails();
    return setSortingType({ field: newField, reversed: false });
  };

  const sortByField = (arr, field, order = false) => {
    const result = [...arr].sort((a, b) => {
      if (typeof a[field] === "string") {
        return a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1;
      }
      return a[field] > b[field] ? 1 : -1;
    });
    if (order) {
      return result.reverse();
    }
    
    return result;
  };

  const onSearchHandler = (phrase, defaultList = list) => {
    if (phrase === "") {
      return sortByField(defaultList, "id");
    }
    const result = list.filter((row) => {
      if (row.firstName.toLowerCase().includes(phrase.toLowerCase())) return true;
      if (row.lastName.toLowerCase().includes(phrase.toLowerCase())) return true;
      if (row.email.toLowerCase().includes(phrase.toLowerCase())) return true;
      if (row.phone.toLowerCase().includes(phrase.toLowerCase())) return true;
      return false;
    });
    resetDetails();
    return result;
  };

  useEffect(() => {
    setCurrentPage(1);
    setSortedList(sortByField(list, sortingType.field, sortingType.reversed));
  }, [list, sortingType.field, sortingType.reversed]);

  const returnListPart = (offset) => {
    return sortedList.slice((offset - 1) * 50, (offset - 1) * 50 + 50);
  };

  return (
    <>
      <TableFilter
        onSearchHandler={onSearchHandler}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setSortedList={setSortedList}
      />
      <AddNewRow />
      <TablePagination
        listLength={sortedList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <table className="main-table">
        <TableHeader
          sortingType={sortingType}
          onSortFieldSelect={onSortFieldSelect}
        />
        <TableRows
          list={returnListPart(currentPage)}
          setSelectedRow={setSelectedRow}
          setIsDetailsVisible={setIsDetailsVisible}
        />
      </table>
      <TablePagination
        listLength={sortedList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isDetailsVisible ? <InfoDetails selectedRow={selectedRow}/> : null}
    </>
  );
}

Table.defaultProps = {
  list: [],
};

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
