import React from "react";
import PropTypes from 'prop-types';

function TablePagination(props) {
  const { listLength, currentPage, setCurrentPage } = props;
  const pages = Math.ceil(listLength / 50);

  const pageChangeHandler = (e) => {
    if (e.target.name === "back" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (e.target.name === "forward" && currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <table className="pagination-container">
        <tbody>
          <tr>
            <td>
              {currentPage !== 1 ? (
                <>
                  <span>1</span>
                  <button
                    type="button"
                    name="back"
                    className="TablePagination__button TablePagination__button--back"
                    onClick={pageChangeHandler}
                  />
                </>
              ) : null}
            </td>
            <td>
              <span>{currentPage}</span>
            </td>
            <td>
              {currentPage !== pages ? (
                <span>
                  <button
                    type="button"
                    name="forward"
                    className="TablePagination__button TablePagination__button--forward"
                    onClick={pageChangeHandler}
                  />
                  <span>{pages}</span>
                </span>
              ) : null}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

TablePagination.propTypes = {
  listLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}



export default TablePagination;


