/**
 * @description thiscomponent for action buttons in the navbar such she, login, sign up and so on
 */
import React from "react";
// mui Components
import { IconButton, ListItemButton, ListItemIcon } from "@mui/material";
// styled components
import { MenuList } from "../../styles/Navbar";
// mui icons
import ShareIcon from "@mui/icons-material/Share";
const NavbarActions = () => {
  return (
    <>
      <IconButton>
        <ShareIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
};

export default NavbarActions;
