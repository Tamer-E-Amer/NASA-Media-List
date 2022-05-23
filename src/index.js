import React from "react";
import ReactDom from "react-dom";
// App
import App from "./App";
// theme
import Theme from "./themes/appTheme";
// ThemeProvider
import { ThemeProvider } from "@mui/material/styles";
// redux provider
import { Provider } from "react-redux";
// redux store
import store from "./redux/store";
ReactDom.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
