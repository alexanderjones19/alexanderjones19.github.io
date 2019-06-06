import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[100],
      contrastText: indigo[900]
    },
    secondary: {
      main: indigo[900],
      dark: indigo['A200'],
      contrastText: indigo[100]
    },
    error: amber,
    background: {
      default: indigo[50]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Raleway", sans-serif',
    h6: {
      fontFamily: '"Comfortaa", cursive'
    }
  }
})

export default theme;