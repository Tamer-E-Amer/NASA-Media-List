import React from "react";
// pages
import Home from "./pages/Home";
import MediaItemDetails from "./pages/MediaItemDetails";
// mui cpmponents
import { CssBaseline } from "@mui/material";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  // Giving a title tp the application pages
  React.useEffect(() => {
    document.title = "NASA Media List";
  }, []);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mediaDetails/:id" element={<MediaItemDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
