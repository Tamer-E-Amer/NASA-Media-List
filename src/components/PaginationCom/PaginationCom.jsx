/**
 * @description pagination component using mui Pagination
 */

import React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// redux hooks
import { useDispatch, useSelector } from "react-redux";
// actions
import { searchNasaMediaWithPaginat } from "../../redux/actions/mediaActions";
const PaginationCom = () => {
  const dispatch = useDispatch();
  // state variables
  const itemsCount = useSelector((state) => state.nasaMediaReducer.itemsCount);
  const word = useSelector((state) => state.nasaMediaReducer.word);

  const count = Math.round(itemsCount / 100);
  const handleChange = (event, value) => {
    dispatch(searchNasaMediaWithPaginat(word, value));
  };
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center">
      <Pagination
        // the API provide only 100 page to show in each page 100 media item even number of the media items more than 10000 items
        count={count > 100 ? 100 : count}
        // page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationCom;
