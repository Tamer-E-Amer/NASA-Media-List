/**
 * @description this is the Nav bar component in mobile view
 */

import React from "react";
//  styled components
import { NavbarContainer, Logo } from "../../styles/Navbar/index";
// mui components
import { IconButton } from "@mui/material";
import NavbarActions from "./NavbarActions";
// images
import logoMobile from "../../imgs/logoMobile.png";
//icons
import MenuIcon from "@mui/icons-material/Menu";
const NavbarMobile = ({ matchMobile }) => {
  return (
    <>
      <NavbarContainer matchMobile={matchMobile}>
        <IconButton size="large" sx={{ color: "white" }}>
          <MenuIcon fontSize="inherit" />
        </IconButton>
        <img src={logoMobile} />

        {/* actions */}
        <NavbarActions />
      </NavbarContainer>
    </>
  );
};

export default NavbarMobile;
