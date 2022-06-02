/**
 * @description pagination component
 */
import React from "react";
import {Pagination, Stack} from "@mui/material";
// redux
import {useDispatch, useSelector} from 'react-redux';
import {getMediabyPage,searchNasaMedia} from '../../redux/actions/mediaActions'

import ReactPaginate from 'react-paginate';
const Paginate = () => {
    const dispatch = useDispatch();

    const handlePageClick=(data)=>{
        dispatch(getMediabyPage(data.selected + 1))
    }
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel="< previous>"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
