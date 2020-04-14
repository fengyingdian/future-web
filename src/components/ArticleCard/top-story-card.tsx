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
import { TagLarge } from './tag';
import useCommonStyles from '../../theme/styles';
import { leftArrow, rightArrow } from '../../constants';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		maxWidth: '100%',
		height: 424,
		background: '#fff',
		borderTop: '4px solid rgb( 206, 65, 39)',
		borderRadius: 0,
		border: '',
		transition: '0.3s',
		position: 'relative',
		top: 0,
		left: 0,
		[theme.breakpoints.down(800)]: {
			padding: theme.spacing(2.5),
		},
		[theme.breakpoints.up(800)]: {
			padding: theme.spacing(3),
		},
	},
	mediaBox: {
		width: '60%',
		position: 'relative',
		top: 0,
		left: 0,
	},
	media: {
		width: '100%',
		height: 0,
		[theme.breakpoints.down(800)]: {
			paddingTop: 380,
		},
		[theme.breakpoints.up(800)]: {
			paddingTop: 372,
		},
	},
	fingerBox: {
		position: 'absolute',
		bottom: 44,
		left: 44,
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
		[theme.breakpoints.down(800)]: {
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
		position: 'absolute',
		top: 0,
		left: 0,
	},
	title: {
		fontSize: 28,
		lineHeight: 1.5,
		color: '#131313',
	},
	excerpt: {
		fontSize: 16,
		lineHeight: 1.5,
		margin: theme.spacing(2, 0, 0),
		color: '#666',
		fontFamily: 'fangzheng-light',
	},
	publisher: {
		fontSize: 12,
		margin: theme.spacing(2, 0, 0),
		color: '#131313',
		fontFamily: 'fangzheng-medium',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
	leftArrow: {
		width: 24,
		height: 43,
		position: 'absolute',
		top: 163,
		left: 0,
	},
	rightArrow: {
		width: 24,
		height: 43,
		position: 'absolute',
		top: 163,
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
						interval={3000}
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
				</div>
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
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'flex-start'}
					flexWrap={'nowrap'}
					className={classes.infoBox}
					style={{ transition: 'all .3s', opacity: state }}>
					<div className={classes.tag}>
						  {article.content.tag && (<TagLarge tag={article.content.tag} />)}
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
