import React from 'react';
import {
	Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		boxSizing: 'border-box',
		margin: theme.spacing(0, 0, 0),
	},
	title: {
		fontSize: 32,
		fontWeight: 900,
	},
}));

const Title = () => {
	const classes = useStyles();

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			className={classes.root}>
			<Typography className={classes.title}>
				{'人民日报'}
			</Typography>
		</Box>
	);
};

export default Title;
