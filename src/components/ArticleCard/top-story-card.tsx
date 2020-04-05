import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Link, Typography, Box, CardMedia,
} from '@material-ui/core';
import moment from 'moment';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { TagTopStory } from './tag';
import useCommonStyles from '../../theme/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		maxWidth: '100%',
		height: 701,
		padding: theme.spacing(3),
		background: '#fff',
		borderTop: '4px solid rgb(167, 56, 52)',
		borderRadius: 0,
		border: '',
		transition: '0.3s',
		position: 'relative',
		top: 0,
		left: 0,
		// '&:hover': {
		// 	transform: 'translateY(-3px)',
		// 	background: '#e8e8e8',
		// 	// boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
		// 	'& #title': {
		// 		// color: '#fff',
		// 	},
		// 	'& #excerpt': {
		// 		// color: '#e8e8e8',
		// 	},
		// },
	},
	header: {
		fontSize: 32,
		fontWeight: 900,
		lineHeight: '32px',
		height: 32,
		color: '#000',
	},
	media: {
		height: 0,
		paddingTop: 420,
	},
	fingerBox: {
		position: 'absolute',
		top: 420,
		left: 44,
	},
	finger: {
		width: 8,
		minWidth: 8,
		height: 8,
		margin: '0 17px 0 0',
		background: '#fff',
		transition: 'all .5s',
	},
	infoBox: {
		height: '100%',
	},
	title: {
		fontSize: 26,
		fontWeight: 900,
		lineHeight: 1.5,
		color: '#000',
	},
	excerpt: {
		flex: 1,
		fontSize: 16,
		lineHeight: 1.5,
		margin: theme.spacing(2, 0, 0),
		color: '#999',
	},
	publisher: {
		fontSize: 12,
		margin: theme.spacing(2, 0, 0),
		color: '#000',
	},
}));

const TopStoryCard = (props: any) => {
	const { articles = [], categoryName } = props;
	if (articles.length <= 0) {
		return (<> </>);
	}

	const [article, setArticle] = useState({
		index: 0,
		content: {
			...articles[0],
			tag: articles[0].tags[0],
			time: moment(articles[0].date).format('YYYY/MM/DD HH:MM:SS'),
		},
	});

	const [state, setState] = useState(1);

	const classes = useStyles();

	const {
		overflowLine1, overflowLine2,
	} = useCommonStyles();

	const handleChange = (index: number) => {
		const item = articles[index];

		setState(0);

		setTimeout(() => {
			setArticle({
				index,
				content: {
					...item,
					tag: item.tags[0],
					time: moment(item.date).format('YYYY/MM/DD HH:MM:SS'),
				},
			});
			setState(1);
		}, 300);
	};

	return (
		<>
			<Typography className={classes.header}>
				{'今日要闻'}
			</Typography>
			<Box className={classes.root}>
				<AutoPlaySwipeableViews
					axis={'x'}
					interval={3000}
					index={article.index}
					onChangeIndex={handleChange}
					enableMouseEvents>
					{articles.map((item: any) => (
						<div key={item.title}>
							<CardMedia
								className={classes.media}
								image={item.cover && item.cover.url}
								title={article.content.title} />
						</div>
					))}
				</AutoPlaySwipeableViews>
				<Box
					className={classes.fingerBox}
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'flex-start'}
					alignItems={'center'}>
					{articles.map((_: any, index: number) => (
						<div
							className={classes.finger}
							style={{
								background: article.index === index ? 'rgb(167, 56, 52)' : '#fff',
							}} />
					)) }
				</Box>
				<Link
					href={`/articles?category=${categoryName}&id=${article.content.id}`}
					underline={'none'}
					style={{ flex: 1 }}>
					<Box
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'flex-start'}
						alignItems={'flex-start'}
						flexWrap={'nowrap'}
						className={classes.infoBox}
						style={{ transition: 'all .3s', opacity: state }}>
						<TagTopStory tag={article.content.tag} />
						<Typography className={`${classes.title} ${overflowLine2}`}>
							{article.content.title}
						</Typography>
						<Typography className={`${classes.excerpt} ${overflowLine2}`}>
							{article.content.excerpt}
						</Typography>
						<Typography className={`${classes.publisher} ${overflowLine1}`}>
							{`${article.content.publisherName} · ${article.content.time}`}
						</Typography>
					</Box>
				</Link>
			</Box>
		</>
	);
};

export default TopStoryCard;
