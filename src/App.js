import React from "react";
// App components
import { Navbar, SearchBar } from "./components";
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
          // search bar
          // search filter
          // about Nasa Media List NML
          // search result list
          // footer
      }
      <Navbar/>
      <SearchBar/>
    </>
  );
};

export default App;
