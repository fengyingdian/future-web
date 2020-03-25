import React from 'react';
import {
	Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(4, 2, 1),
		padding: theme.spacing(1, 0, 1),
		width: '100%',
		borderTop: '1px solid #f8f8f8',
		borderBottom: '1px solid #f8f8f8',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 16,
		fontWeight: 900,
		margin: theme.spacing(0, 2, 0),
		'&:hover': {
			color: '#f52828',
		},
	},
}));

const Tab = (props: any) => {
	const classes = useStyles();
	const { menus = [] } = props;

	return (
		<Box display={'flex'} flexDirection={'row'} justifyContent={'center'} className={classes.root}>
			{menus.map((menu: string) => (
				<Typography className={classes.title}>
					{menu}
				</Typography>
			))}
		</Box>
	);
};

export default Tab;
