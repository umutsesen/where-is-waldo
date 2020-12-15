import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#ffffff',
    },
  },
});
export default theme;