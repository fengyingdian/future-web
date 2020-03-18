
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(6, 0, 3),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
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
