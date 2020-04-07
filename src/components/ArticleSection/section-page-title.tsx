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

		lineHeight: '28px',
		color: '#131313',
		width: '100%',
		boxSizing: 'border-box',
		borderBottom: '4px solid rgb(167, 56, 52)',
	},
	description: {
		fontSize: 28,
		lineHeight: '28px',

		color: 'rgb(167, 56, 52)',
		boxSizing: 'border-box',
		padding: theme.spacing(0),
	},
}));

export const Title = (props: any) => {
	const classes = useStyles();
	const { title = '' } = props;

	return (
		<Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} className={classes.root}>
			<Typography className={classes.title}>
				{title}
			</Typography>
			{/* <Typography className={classes.description}>
				{description}
			</Typography> */}
		</Box>
	);
};

export default {};
