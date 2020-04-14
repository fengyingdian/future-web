/* eslint-disable max-len */
import React from 'react';
import {
	Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0),
		padding: theme.spacing(0),
		width: '100%',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 28,
		lineHeight: '28px',
		color: '#131313',
		width: '100%',
		boxSizing: 'border-box',
		borderBottom: '4px solid rgb( 206, 65, 39)',
	},
}));

export const Title = (props: any) => {
	const classes = useStyles();
	const { title = '' } = props;

	return (
		<Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} className={classes.root}>
			<Typography className={classes.title}>
				{title}
			</Typography>
		</Box>
	);
};

export default {};
