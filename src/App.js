import React from "react";
// App components
import { Navbar } from "./components";
// mui cpmponents
import { CssBaseline } from "@mui/material";
const App = () => {
  // Giving a title tp the application pages
  React.useEffect(() => {
    document.title = "NASA Media List";
  }, []);
  return (
    <>
      <CssBaseline />
      {
          // navbar
          // search bar
          // search filter
          // about Nasa Media List NML
          // search result list
          // footer
      }
      <Navbar/>
    </>
  );
};

export default App;
