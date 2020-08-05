import React, { useEffect, useState } from "react";
import { fetchData } from "../functions/fetchFunctions";
import Table from "./Table";
import { useCallback } from "react";
import Loader from "react-loader-spinner";

function TableApp(props) {
  const { set } = props;
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getList = useCallback(async () => {
    setIsFetching(true);
    const newList = await fetchData(set);
    setList(newList);
    setIsFetching(false);
  }, [set]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
      {isFetching ? (
        <div className="loader-container">
          <h3>Пожалуйста, подождите...</h3>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <Table list={list} />
      )}
    </>
  );
}

export default TableApp;
