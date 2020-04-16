/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
import { leftArrow, rightArrow } from '../../constants';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		justifyContent: 'flex-start',
		maxWidth: '100%',
		background: '#fff',
		borderTop: '4px solid rgb( 206, 65, 39)',
		borderRadius: 0,
		border: '',
		transition: '0.3s',
		position: 'relative',
		top: 0,
		left: 0,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			padding: theme.spacing(2),
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			height: 418,
			padding: theme.spacing(2.5),
		},
		[theme.breakpoints.up(800)]: {
			padding: theme.spacing(3),
		},
	},
	mediaBox: {
		[theme.breakpoints.down('sm')]: {
		  width: '100%',
		},
		[theme.breakpoints.up('sm')]: {
		  width: '60%',
		},
		position: 'relative',
		top: 0,
		left: 0,
	},
	media: {
		width: '100%',
		height: 0,
		[theme.breakpoints.down('sm')]: {
			paddingTop: '56%',
		},
		[theme.breakpoints.up('sm')]: {
			paddingTop: 374,
		},
		[theme.breakpoints.up(800)]: {
			paddingTop: 368,
		},
	},
	fingerBox: {
		position: 'absolute',
		left: theme.spacing(3),
		bottom: theme.spacing(3),
	},
	finger: {
		width: 4,
		minWidth: 4,
		height: 4,
		margin: theme.spacing(0, 1, 0, 0),
		background: '#fff',
		transition: 'all .5s',
	},
	infoBox: {
		flex: 1,
		height: '100%',
		[theme.breakpoints.down('sm')]: {
			margin: theme.spacing(2, 0, 0),
		},
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(0, 0, 0, 2),
		},
		[theme.breakpoints.up(800)]: {
			margin: theme.spacing(0, 0, 0, 3),
		},
		position: 'relative',
		top: 0,
		left: 0,
	},
	tag: {
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			position: 'absolute',
			top: 0,
			left: 0,
		},
	},
	title: {
		fontSize: 18,
		lineHeight: 1.5,
		color: '#131313',
		[theme.breakpoints.up('sm')]: {
			fontSize: 28,
		},
	},
	excerpt: {
		fontSize: 12,
		lineHeight: 1.5,
		margin: theme.spacing(2, 0, 0),
		color: '#666',
		fontFamily: 'fangzheng-light',
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
		},
	},
	publisher: {
		fontSize: 10,
		margin: theme.spacing(2, 0, 0),
		color: '#131313',
		fontFamily: 'fangzheng-medium',
		[theme.breakpoints.up('sm')]: {
			fontSize: 12,
			position: 'absolute',
			left: 0,
			bottom: 0,
		},
	},
	leftArrow: {
		width: 24,
		height: 42,
		position: 'absolute',
		top: 'calc(50% - 21px)',
		left: 0,
	},
	rightArrow: {
		width: 24,
		height: 42,
		position: 'absolute',
		top: 'calc(50% - 21px)',
		right: 0,
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
			// tag: articles[0].tags.length > 0 ? articles[0].tags[0] : [categoryName],
			tag: '要闻',
			time: moment(articles[0].date).format('YYYY/MM/DD'),
		},
	});

	const [state, setState] = useState(1);

	const classes = useStyles();

	const {
		overflowLine1, overflowLine3, overflowLine4,
	} = useCommonStyles();

	const handleChange = (index: number) => {
		const item = articles[index];

		setState(0);

		setTimeout(() => {
			setArticle({
				index,
				content: {
					...item,
					// tag: item.tags.length > 0 ? item.tags[0] : [categoryName],
					tag: '要闻',
					time: moment(item.date).format('YYYY/MM/DD'),
				},
			});
			setState(1);
		}, 300);
	};

	return (
		<Link
			href={`/articles?category=${categoryName}&id=${article.content.id}`}
			underline={'none'}
			style={{ flex: 1 }}>
			<Box className={classes.root}>
				<div className={classes.mediaBox}>
					<AutoPlaySwipeableViews
						axis={'x'}
						interval={30000}
						index={article.index}
						onChangeIndex={handleChange}
						enableMouseEvents>
						{articles.map((item: any) => (
							<div key={item.title}>
								<CardMedia
									className={classes.media}
									image={(item.cover && item.cover.url) || ''}
									title={article.content.title} />
							</div>
						))}
					</AutoPlaySwipeableViews>
					<img
						onClick={(e: any) => {
							e.stopPropagation();
							e.preventDefault();
							handleChange(article.index > 0 ? article.index - 1 : articles.length - 1);
						}}
						src={leftArrow}
						alt={''}
						className={classes.leftArrow} />
					<img
						onClick={(e: any) => {
							e.stopPropagation();
							e.preventDefault();
							handleChange(article.index < articles.length - 1 ? article.index + 1 : 0);
						}}
						src={rightArrow}
						alt={''}
						className={classes.rightArrow} />
					<Box
						className={classes.fingerBox}
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'flex-start'}
						alignItems={'center'}>
						{articles.map((_: any, index: number) => (
							<div
								key={index}
								className={classes.finger}
								style={{
									background: article.index === index ? 'rgb( 206, 65, 39)' : '#fff',
								}} />
						)) }
					</Box>
				</div>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'flex-start'}
					flexWrap={'nowrap'}
					className={classes.infoBox}
					style={{ transition: 'all .3s', opacity: state }}>
					<div className={classes.tag}>
						{article.content.tag && (<TagTopStory tag={article.content.tag} />)}
					</div>
					<Typography className={`${classes.title} ${overflowLine4}`}>
						{article.content.title}
					</Typography>
					<Typography className={`${classes.excerpt} ${overflowLine3}`}>
						{article.content.excerpt}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
						{`${article.content.publisherName}·${article.content.time}`}
					</Typography>
				</Box>
			</Box>
		</Link>
	);
};

export default TopStoryCard;
