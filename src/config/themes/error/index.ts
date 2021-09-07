import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { red } from "@material-ui/core/colors";



let ErrorTheme = createMuiTheme({
    palette: {
        primary: red,
    }
})

ErrorTheme = responsiveFontSizes(ErrorTheme)

export default ErrorTheme