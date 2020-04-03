import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Link, CardMedia, Typography, Box,
} from '@material-ui/core';
import moment from 'moment';
import { TagTopStory } from './tag';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		height: '701px',
		padding: theme.spacing(3),
		background: '#fff',
		borderTop: '4px solid rgb(207, 92, 67)',
		borderRadius: 0,
		border: '',
		transition: '0.3s',
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
	},
	header: {
		fontSize: 32,
		fontWeight: 900,
		lineHeight: '32px',
		height: '32px',
		color: '#000',
	},
	media: {
		height: 0,
		paddingTop: '420px',
	},
	title: {
		fontSize: 32,
		fontWeight: 900,
		lineHeight: 1.5,
		color: '#000',
	},
	description: {
		fontSize: 18,
		lineHeight: 1.5,
		margin: theme.spacing(2, 0, 0),
		height: '60px',
		color: '#999',
	},
	publisher: {
		fontSize: 14,
		margin: theme.spacing(2, 0, 0),
		color: '#666',
	},
}));

const TopStoryCard = (props: any) => {
	const classes = useStyles();
	const {
		cover: {
			url = '',
		} = {}, title = '', excerpt = '', id = '', tags = [''], categoryName = '', date = '', publisherName = '',
	} = props;
	const [tag] = tags;
	const time = moment(date).format('YYYY/MM/DD HH:mm:ss');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
			<Typography className={classes.header}>
				{'今日要闻'}
			</Typography>
			<Box className={classes.root}>
				<CardMedia
					className={classes.media}
					image={url}
					title={title}
				/>
				<TagTopStory tag={tag} />
				<Typography id={'title'} className={classes.title}>
					{title}
				</Typography>
				<Typography id={'excerpt'} className={classes.description}>
					{excerpt}
				</Typography>
				<Typography className={classes.publisher}>
					{`${publisherName} · ${time}`}
				</Typography>
			</Box>
		</Link>
	);
};

export default TopStoryCard;
