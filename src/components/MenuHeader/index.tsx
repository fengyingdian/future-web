import React from 'react';
import {
	Box, Typography, Link,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0),
		padding: theme.spacing(0),
		width: '100%',
		boxSizing: 'border-box',
		background: '#fff',
	},
	title: {
		fontSize: 20,
		fontWeight: 900,
		boxSizing: 'border-box',
		color: '#111',
		padding: theme.spacing(2, 4),
		'&:hover': {
			color: '#f52828',
		},
	},
}));

const MenuBar = (props: any) => {
	const classes = useStyles();
	const { menus = [] } = props;

	return (
		<Box display={'flex'} flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'} className={classes.root}>
			{menus.map(({ name, id }: any) => (
				<Link key={id} href={`/sections?id=${id}`}>
					<Typography className={classes.title}>
						{name}
					</Typography>
				</Link>
			))}
		</Box>
	);
};

export default MenuBar;
