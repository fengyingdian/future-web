/* eslint-disable max-len */
import React from 'react';
import {
	Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
	root: {
		width: '100%',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 28,

		lineHeight: '28px',
		color: '#000',
		width: '100%',
		boxSizing: 'border-box',
		borderBottom: '4px solid rgb(167, 56, 52)',
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
		</Box>
	);
};

export default {};
