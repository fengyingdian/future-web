/* eslint-disable max-len */
import React from 'react';
import {
	Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		padding: theme.spacing(0, 1, 1),
		width: '100%',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 28,
		fontWeight: 900,
		lineHeight: '28px',
		color: '#000',
		width: '100%',
		boxSizing: 'border-box',
		borderBottom: '4px solid rgb(207, 92, 67)',
	},
	description: {
		fontSize: 28,
		lineHeight: '28px',
		fontWeight: 200,
		color: 'rgb(207, 92, 67)',
		boxSizing: 'border-box',
		padding: theme.spacing(0),
	},
}));

export const Title = (props: any) => {
	const classes = useStyles();
	const { title = '', description = '未来都在做什么' } = props;

	return (
		<Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} className={classes.root}>
			<Typography className={classes.title}>
				{title}
			</Typography>
			<Typography className={classes.description}>
				{description}
			</Typography>
		</Box>
	);
};

export default {};
