/**
 * @description styled components for search Data
 */
import { Stack, Box, Grid, List, styled } from "@mui/material";
import { colors } from "../../themes/appTheme";

// main Nasa media wrapper
export const MainDataWrapper = styled(Grid)(({ theme }) => ({
  padding: "1rem 4rem",
  backgroundColor: colors.mid_gray,
  height: "auto",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));

// filter media

export const FilterMediaWrapper = styled(List)(() => ({
  //   width: "30%",
  backgroundColor: colors.dark_grey,
  color: "#FFF",
  paddingTop: 0,
}));

// about Nasa Media API

export const AboutNasaWrapper = styled(Stack)(() => ({
  //   width: "30%",
  backgroundColor: colors.dark_grey,
  color: "#FFF",
  margin: "1rem 0",
}));

// about nasa header
export const CompHeader = styled(Box)(() => ({
  padding: "0.75rem",
  backgroundColor: colors.light_gray,
  color: "#FFF",
}));

// about nasa data
export const AboutData = styled(Box)(({ theme }) => ({
  padding: "1rem 2rem",
  backgroundColor: colors.dark_grey,
  color: "#FFF",
  fontSize: "14px",
  fontWeight: 300,

  lineHeight: 2,
  [theme.breakpoints.down("md")]: {
    // padding: 0,
    width: "100%",
  },
}));

// search result wrapper
export const SearchDataWrapper = styled(Stack)(() => ({
  backgroundColor: colors.light_gray,
  padding: "1rem",
  height: "auto",
}));
