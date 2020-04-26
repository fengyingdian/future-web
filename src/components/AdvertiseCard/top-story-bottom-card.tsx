/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Card, CardMedia, Link,
} from '@material-ui/core';
import { advertiseStrip } from '../../constants/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		height: 138,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'space-between',
		margin: theme.spacing(2, 0, 0),
		padding: theme.spacing(0),
		transition: '0.3s',
		boxShadow: '0 0 0',
		border: 0,
		borderRadius: 0,
		background: '#fff',
		'&:hover': {
			transform: 'translateY(-3px)',
			background: '#e8e8e8',
			// boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
			'& #title': {
				// color: '#fff',
			},
			'& #excerpt': {
				// color: '#e8e8e8',
			},
		},
		[theme.breakpoints.down(800)]: {
			display: 'none',
		},
	},
	image: {
		width: '100%',
		height: '100%',
	},
}));

const ArticleCard = () => {
	const classes = useStyles();

	return (
		<Link href={'/'} underline={'none'}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.image}
					image={advertiseStrip}
					title={'advertise-cover'} />
			</Card>
		</Link>
	);
};

export default ArticleCard;
