/**
 * @description Footer styling
 */

import { Box, styled, Typography } from "@mui/material";
import { colors } from "../../themes/appTheme";

export const FooterContainer = styled(Box)(() => ({
  height: 60,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.dark_grey,
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  color: "#FFF",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));
