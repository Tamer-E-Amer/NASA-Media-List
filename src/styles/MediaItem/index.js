/**
 * @decsription Media Item component styling
 */

import { Paper, styled } from "@mui/material";

export const Item = styled(Paper)(() => ({
  width: 280,
  height: 280,
  padding: "1rem",
  margin: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
  },
}));
