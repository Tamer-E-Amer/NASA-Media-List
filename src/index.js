import React from "react";
import ReactDom from "react-dom";
// App
import App from "./App";
// theme
import Theme from './themes/appTheme'
// ThemeProvider
import {ThemeProvider} from '@mui/material/styles'
import theme from "./themes/appTheme";
ReactDom.render(
  <ThemeProvider theme={theme}>

    <App />
  </ThemeProvider>
    ,
  document.getElementById("root")
);
