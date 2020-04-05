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
			default: '#f8f8f8',
		},
	},
	typography: {
		fontFamily: [
			'Source Han Serif SC',
			'Source Han Serif CN',
			'source-han-serif-sc',
			'noto serif cjk sc',
		].join(','),
		fontSize: 12,
	},
});

export default Theme;
