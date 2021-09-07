import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { white } from './colors/';



let theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: white
        }
    }
})

theme = responsiveFontSizes(theme)

export default theme