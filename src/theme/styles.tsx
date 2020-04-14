
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0, 0),
		padding: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '100%',
		userSelect: 'none',
	},
	overflowLine1: {
		display: '-webkit-box',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitBoxOrient: 'vertical',
		WebkitLineClamp: 1,
	},
	overflowLine2: {
		display: '-webkit-box',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitBoxOrient: 'vertical',
		WebkitLineClamp: 2,
	},
	overflowLine3: {
		display: '-webkit-box',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitBoxOrient: 'vertical',
		WebkitLineClamp: 3,
	},
	overflowLine4: {
		display: '-webkit-box',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitBoxOrient: 'vertical',
		WebkitLineClamp: 4,
	},
}));

export default useStyles;
