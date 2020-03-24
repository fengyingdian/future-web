/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardHeader, CardMedia, Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
	smallRoot: {
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
	largeRoot: {
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
	const { image = '' } = props;

	return (
		<Card className={classes.smallRoot}>
			<CardMedia
				className={classes.shortImage}
				image={image}
				title={'Paella dish'}
			/>
			<CardHeader
				className={classes.header}
				title={'浓墨重彩书写依规治党新篇章'}
			/>
			<Typography className={classes.content} variant={'body2'} color={'textSecondary'} component={'p'}>
				{'治国必先治党，治党务必从严，从严必依法度。站在“两个一百年”奋斗目标的历史交汇点，以习近平同志为核心的党中央着眼坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，全方位推进新时代党内法规制度建设，在党内法规制度的坚持和巩固、完善和发展、遵守和执行上，取得新的进展和成效。'}
			</Typography>
		</Card>
	);
};

export const ArticleCardLongImage = (props: any) => {
	const classes = useStyles();
	const { image = '' } = props;

	return (
		<Card className={classes.smallRoot}>
			<CardMedia
				className={classes.longImage}
				image={image}
				title={'Paella dish'}
			/>
			<CardHeader
				className={classes.header}
				title={'浓墨重彩书写依规治党新篇章'}
			/>
			<Typography className={classes.content} variant={'body2'} color={'textSecondary'} component={'p'}>
				{'治国必先治党，治党务必从严，从严必依法度。站在“两个一百年”奋斗目标的历史交汇点，以习近平同志为核心的党中央着眼坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，全方位推进新时代党内法规制度建设，在党内法规制度的坚持和巩固、完善和发展、遵守和执行上，取得新的进展和成效。'}
			</Typography>
		</Card>
	);
};

export const ArticleCardLargeImage = (props: any) => {
	const classes = useStyles();
	const { image = '' } = props;
	const id = '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec';

	return (
		<Link href={`/articles?id=${id}`}>
			<Card className={classes.largeRoot}>
				<CardMedia
					className={classes.largeImage}
					image={image}
					title={'Paella dish'}
				/>
				<CardHeader
					className={classes.header}
					title={'浓墨重彩书写依规治党新篇章'}
				/>
				<Typography className={classes.content} variant={'body2'} color={'textSecondary'} component={'p'}>
					{'治国必先治党，治党务必从严，从严必依法度。站在“两个一百年”奋斗目标的历史交汇点，以习近平同志为核心的党中央着眼坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，全方位推进新时代党内法规制度建设，在党内法规制度的坚持和巩固、完善和发展、遵守和执行上，取得新的进展和成效。'}
				</Typography>
			</Card>
		</Link>
	);
};
