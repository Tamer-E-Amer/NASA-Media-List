/**
 * @description: This file that match the Navbar with screen according to certain break Pint. we use it to make a responsive nav bar
 */

import React from 'react'
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
// navbar mobile and desktop components
import NavbarDesktop from './NavbarDeskTop'
import NavbarMobile from './NavbarMobile'
const NavBar = () => {
    const theme = useTheme();
    const matchMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
      <>
        {matchMobile ? <NavbarMobile matchMobile={matchMobile}/> : <NavbarDesktop/>}
      </>
  )
}

export default NavBar