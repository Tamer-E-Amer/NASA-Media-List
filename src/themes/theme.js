/**
 * @description this fiel is used to define the theme that overrides the default mui theme
 */
import { createTheme } from "@mui/material/styles"
const theme = createTheme({
palette:{
    primary:{
        main: '#554a4a',
    },
    secondary:{
        main:"#a71717"
    }
}
})

export default theme;