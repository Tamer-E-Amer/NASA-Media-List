/**
 * @description this is the Nav bar component in desktop view
 */
import React from "react";
//  styled components
import { NavbarContainer, MenuList } from "../../styles/Navbar/index";
// mui components
import { ListItemText } from "@mui/material";
import NavbarActions from "./NavbarActions";
// images
import LogoDark from "../../imgs/LogoDark.png";
const NavbarDeskTop = () => {
  return (
    <>
      <NavbarContainer>
        <img src={LogoDark} />

        {/* menuLinks */}

        <MenuList>
          <ListItemText
            primary="Home"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <ListItemText
            primary="About NASA"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <ListItemText
            primary="Missions"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <ListItemText
            primary="Mars"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <ListItemText
            primary="Spaceships"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <ListItemText
            primary="Downloads"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </MenuList>
        {/* actions */}
        <NavbarActions />
      </NavbarContainer>
    </>
  );
};

export default NavbarDeskTop;
