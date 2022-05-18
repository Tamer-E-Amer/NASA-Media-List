import React from "react";
// App components
import { Navbar, SearchBar, MainDataHolder } from "./components";
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
        // search bar // done
        // search filter // done
        // Main data Holder the holdes the follwoing components
        // 1- about Nasa Media List NML   //done
        // 2- search result list
        // 3- filter component    // done
        // footer
      }
      <Navbar />
      <SearchBar />
      <MainDataHolder />
    </>
  );
};

export default App;
