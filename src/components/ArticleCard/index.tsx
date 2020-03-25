/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardHeader, CardMedia, Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		margin: theme.spacing(0, 0, 0),
		padding: theme.spacing(0, 0, 0),
		transition: '0.3s',
		boxShadow: '0 0 0',
		border: 0,
		borderRadius: 0,
		// boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
		'&:hover': {
			transform: 'translateY(-3px)',
			// boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
		},
	},
	header: {
		padding: theme.spacing(1, 0, 0),
		fontWeight: 900,
	},
	shortImage: {
		height: 0,
		paddingTop: '67%',
	},
	longImage: {
		height: 0,
		paddingTop: '100%',
	},
	largeImage: {
		height: 0,
		paddingTop: '56.9%',
	},
	content: {
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitLineClamp: 3,
		margin: theme.spacing(0, 0, 0),
		padding: theme.spacing(1, 0, 0),
	},
}));

export const ArticleCardShortImage = (props: any) => {
	const classes = useStyles();

	const {
		image = '', title = '', description = '', id = '',
	} = props;

	return (
		<Link href={`/articles?id=${id}`}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.shortImage}
					image={image}
					title={'Paella dish'}
				/>
				<CardHeader
					className={classes.header}
					title={title}
				/>
				<Typography className={classes.content} variant={'body2'} color={'textSecondary'} component={'p'}>
					{description}
				</Typography>
			</Card>
		</Link>
	);
};

export const ArticleCardLongImage = (props: any) => {
	const classes = useStyles();

	const {
		image = '', title = '', description = '', id = '',
	} = props;

	return (
		<Link href={`/articles?id=${id}`}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.longImage}
					image={image}
					title={'Paella dish'}
				/>
				<CardHeader
					className={classes.header}
					title={title}
				/>
				<Typography className={classes.content} variant={'body2'} color={'textSecondary'} component={'p'}>
					{description}
				</Typography>
			</Card>
		</Link>
	);
};

export const ArticleCardLargeImage = (props: any) => {
	const classes = useStyles();
	const {
		image = '', title = '', description = '', id = '',
	} = props;

	return (
		<Link href={`/articles?id=${id}`}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.largeImage}
					image={image}
					title={'Paella dish'}
				/>
				<CardHeader
					className={classes.header}
					title={title}
				/>
				<Typography className={classes.content} variant={'body2'} color={'textSecondary'} component={'p'}>
					{description}
				</Typography>
			</Card>
		</Link>
	);
};
