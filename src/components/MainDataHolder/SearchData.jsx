/**
 * @description This components shows the Search result
 */

import { Box, Typography } from "@mui/material";
import React from "react";

// styled components
import { SearchDataWrapper } from "../../styles/MainDataHolder";
const SearchData = () => {
  return (
    <>
      <SearchDataWrapper>
        {/* search title */}
        <Box>
          <Typography color="#FFF" variant="h6">
            Search For ...
          </Typography>
          <Typography variant="body2" component="div">
            220 results found
          </Typography>
        </Box>
        {/* search results */}
      </SearchDataWrapper>
    </>
  );
};

export default SearchData;
