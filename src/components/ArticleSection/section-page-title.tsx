import React from 'react';
import {
	Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(1, 0, 1),
		padding: theme.spacing(1, 0, 0),
		width: '100%',
		// borderBottom: '10px solid #f52828',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 30,
		fontWeight: 900,
	},
}));

const Title = (props: any) => {
	const classes = useStyles();
	const { title = '' } = props;

	return (
		<Box display={'flex'} flexDirection={'row'} justifyContent={'center'} className={classes.root}>
			<Typography className={classes.title}>
				{title}
			</Typography>
		</Box>
	);
};

export default Title;
