/**
 * @description this component contains the main section of the application which is a grid that holds in the left two components, one of them gives information about the app and the other component holds filtering data.
 *  - In the right of this grid there is a components that holds the NASA Media grid
 */

import React from "react";
// app components
import FilterMedia from "./FilterMedia";
import AboutNasaMedia from "./AboutNasaMedia";
import SearchData from "./SearchData";
// styled components
import { MainDataWrapper } from "../../styles/MainDataHolder";
// mui components
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const MainDataHolder = () => {
  const theme = useTheme();

  const inSmalOrMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {inSmalOrMediumScreen ? (
        <MainDataWrapper container spacing={2}>
          <Grid item xs={12} lg={3}>
            <FilterMedia />
          </Grid>

          <Grid item xs={12} lg={9}>
            <SearchData />
          </Grid>

          <Grid item xs={12} lg={3}>
            <AboutNasaMedia />
          </Grid>
        </MainDataWrapper>
      ) : (
        <MainDataWrapper container spacing={2}>
          <Grid item xs={12} lg={3}>
            <FilterMedia />
            <AboutNasaMedia />
          </Grid>

          <Grid item xs={12} lg={9}>
            <SearchData />
          </Grid>
        </MainDataWrapper>
      )}
    </>
  );
};

export default MainDataHolder;
