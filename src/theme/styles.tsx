
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0, 0, 2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	articleLayout: {
		maxWidth: '100',
		// boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
		'&:hover': {
			transform: 'translateY(-5px)',
			// boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
		},
		[theme.breakpoints.down('sm')]: {
			backgroundColor: '#777',
		},
		[theme.breakpoints.up('md')]: {
			backgroundColor: '#aaa',
		},
		[theme.breakpoints.up('lg')]: {
			backgroundColor: '#333',
		},
	},
	leftSide: {
		margin: theme.spacing(6, 0, 3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'felx-start',
	},
	titleLarge: {
		color: '#fff',
		fontWeight: 900,
	},
	titleMiddle: {
		color: '#fff',
		fontWeight: 500,
	},
	textFiled: {
		color: '#f8f8f8',
		margin: theme.spacing(2, 0, 2),
	},
	multiText: {
		color: '#f8f8f8',
		margin: theme.spacing(6, 0, 2),
	},
	buttonSide: {

	},
}));

export default useStyles;
