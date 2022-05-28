/**
 * @description this page is to shoe the details of a media item
 */

import { Grid, Stack } from "@mui/material";
import React from "react";
// App components
import {
  Navbar,
  SearchBar,
  Footer,
  MediaItemDataContainer,
} from "../components";

const MediaItemDetails = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <MediaItemDataContainer />
      <Footer />
    </>
  );
};

export default MediaItemDetails;
