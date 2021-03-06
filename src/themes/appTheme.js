/**
 * @description this file is used to create theme for the application
 */

import { createTheme } from "@mui/material/styles";
import { color } from "@mui/system";

// colors palette
export const colors = {
  primary: "#0B3D91",

  ///////////////
  // Grays
  ///////////////
  dark_grey: "#272525",
  mid_gray: "#26282F",
  light_gray: "#7B7C80",
  bgWithOpacity: `rgba(39,37,37,0.70)`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.mid_gray,
    },
  },
});

export default theme;
