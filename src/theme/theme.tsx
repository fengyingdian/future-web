import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'rgb(163, 9, 10)',
    },
  },
  typography: {
    fontFamily: [
      'Source Han Serif CN',
      'Source Han Serif SC',
      'source-han-serif-sc',
      'STSong',
      'SimSun',
    ].join(','),
  },
});

export default Theme;
