/**
 * @descriptions This file holds the styles components for the Navbar
 */

import { Box,List } from "@mui/material";
import { styled } from "@mui/material/styles";
// images
import NavbarBackground from '../../imgs/navbarBackground.jpg'

// Nab bar container
export const NavbarContainer = styled(Box)(({matchMobile})=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundImage:`url(${NavbarBackground})`,
    height:120,
    padding:matchMobile?"0 2rem":"0 4rem",

}))

// Menu List

export const MenuList = styled(List)(()=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexGrow:3,
    color:"white",
    padding:"0 5rem",
}))