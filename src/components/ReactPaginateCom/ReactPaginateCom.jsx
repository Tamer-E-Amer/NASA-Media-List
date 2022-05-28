import React from "react";
import ReactPaginate from "react-paginate";
const ReactPaginateCom = () => {
  const handlePageClick = () => {
    console.log("page");
  };
  const pageCount = 10;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default ReactPaginateCom;
