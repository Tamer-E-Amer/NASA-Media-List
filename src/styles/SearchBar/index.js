/**
 * @description styled components for SearchBar component
 */

import { Box, Button, styled, TextField } from "@mui/material";
// images
import searchBackground from "../../imgs/searchBackground.jpg";
import searchBackMobile from "../../imgs/searchBackMobile.png";

// theme
import { colors } from "../../themes/appTheme";

export const SearchBarContainer = styled(Box)(({ theme, isMatchMobile }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "1rem 4rem",
  backgroundImage: `url(${searchBackground})`,
  //   backgroundRepeat:"no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "144px",
  // another way to use breakpints
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    backgroundImage: `url(${searchBackMobile})`,
    height: "79px",
  },
}));

// serach bar form

export const SearchBarForm = styled("form")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "felx-start",
  width: "450px",
  height: 60,
  border: "5px solid #0B3D91",
}));

// search input

export const SearchInput = styled("input")(({ theme }) => ({
  outline: "none",
  border: "none",
  width: "80%",
  height: "90%",
  backgroundColor: "transparent",
  padding: "1rem",
  color: colors.dark_grey,
  fontSize: "20px",
  textAlign: "center",
  // change the color of search according to scrren size
  [theme.breakpoints.down("md")]: {
    color: "#FFF",
  },
}));

// search input Button

export const SearchInputButtonWrapper = styled(Box)(() => ({
  height: "100%",
  width: "20%",
  backgroundColor: "#0B3D91",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
