/**
 * @description media item data styles
 */

import { Grid, styled, Button, Typography } from "@mui/material";
import { colors } from "../../themes/appTheme";

// media items details wrapper
/**
 * this wrap 2 divisions one is the about nasa api component and the other is a container that holds the information about media item
 */
export const MediaItemDetailsWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: colors.mid_gray,
  height: "auto",
  padding: "1rem 4rem",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));

// media item data wraper
/**
 * this wrap the data about media item
 */
export const MediaItemDetails = styled(Grid)(() => ({
  backgroundColor: colors.dark_grey,
  padding: "1rem",
}));

// media image

export const MediaImage = styled("img")(({ theme }) => ({
  height: 375,
  width: 437,
  [theme.breakpoints.down("md")]: {
    width: 600,
  },
  [theme.breakpoints.down("sm")]: {
    width: 320,
  },
}));

// title
export const ItemTitle = styled(Typography)(() => ({
  color: "#fff",
  fontSize: 16,
}));

// ActionButton

export const ActionButton = styled(Button)(() => ({
  height: 51,
  width: 324,
  backgroundColor: colors.primary,
  fontSize: 16,
  borderRadius: 0,
  color: "#fff",
  textDecoration: "none",
}));
