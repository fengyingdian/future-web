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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: '100%',
    background: '#fff',
    borderRadius: 0,
    border: '',
    transition: '0.3s',
    position: 'relative',
    top: 0,
    left: 0,
    [theme.breakpoints.down(800)]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up(800)]: {
      height: 424,
    },
    [theme.breakpoints.up(1024)]: {
      height: 424,
    },
  },
  mediaBox: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0),
    },
    position: 'relative',
    left: 0,
    bottom: 0,
  },
  media: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 0,
      paddingTop: '48%',
    },
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up(800)]: {
      height: 424,
    },
    [theme.breakpoints.up(1024)]: {
      height: 424,
    },
  },
  infoBox: {
    width: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.down(800)]: {
      padding: theme.spacing(2, 0, 0),
      background: '#fff',
    },
    [theme.breakpoints.up(800)]: {
      background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6))',
      padding: theme.spacing(2),
      position: 'absolute',
      left: 0,
      bottom: 0,
    },
    [theme.breakpoints.up(1024)]: {
      padding: theme.spacing(3),
    },
  },
  tag: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    },
  },
  title: {
    lineHeight: 1.5,
    display: '-webkit-box',
    overflow: 'hidden',
    wordBreak: 'break-word',
    whiteSpace: 'pre-line',
    WebkitBoxOrient: 'vertical',
    [theme.breakpoints.down('sm')]: {
      color: '#000',
      fontSize: 18,
      webkitLineClamp: 3,
    },
    [theme.breakpoints.up('sm')]: {
      color: '#000',
      fontSize: 24,
      WebkitLineClamp: 2,
    },
    [theme.breakpoints.up(800)]: {
      color: '#fff',
      fontSize: 24,
      WebkitLineClamp: 1,
    },
    [theme.breakpoints.up(1024)]: {
      color: '#fff',
      fontSize: 28,
      WebkitLineClamp: 1,
    },
  },
  publisher: {
    fontSize: 10,
    margin: theme.spacing(1, 0, 0),
    color: '#fff',
    fontFamily: 'fangzheng-medium',
    [theme.breakpoints.down('sm')]: {
      color: 'rgb(163, 9, 10)',
    },
    [theme.breakpoints.up('sm')]: {
      color: 'rgb(163, 9, 10)',
    },
    [theme.breakpoints.up(800)]: {
      color: '#fff',
    },
  },
  arrow: {
    width: 16,
    height: 28,
    position: 'absolute',
    top: 'calc(50% - 14px)',
    [theme.breakpoints.up(800)]: {
      width: 24,
      height: 42,
      top: 'calc(50% - 21px)',
    },
  },
}));

const TopStoryCard = (props: any) => {
  const {
    articles = [],
    categoryName,
  } = props;
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
						interval={4000}
						index={article.index}
						onChangeIndex={handleChange}
						enableMouseEvents>
						{articles.map((item: any) => (
							<div key={item.title}>
								<CardMedia
									className={classes.media}
									image={(item.cover && item.cover.url) || ''}
									title={'article-cover'} />
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
						className={classes.arrow}
						style={{ left: 0 }} />
					<img
						onClick={(e: any) => {
						  e.stopPropagation();
						  e.preventDefault();
						  handleChange(article.index < articles.length - 1 ? article.index + 1 : 0);
						}}
						src={rightArrow}
						alt={''}
						className={classes.arrow}
						style={{ right: 0 }} />
				</div>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-end'}
					alignItems={'flex-start'}
					flexWrap={'nowrap'}
					className={classes.infoBox}>
					<div className={classes.tag} style={{ transition: 'all .3s', opacity: state }}>
						{article.content.tag && (<TagTopStory tag={article.content.tag} />)}
					</div>
					<Typography className={`${classes.title} ${overflowLine2}`} style={{ transition: 'all .3s', opacity: state }}>
						{article.content.title}
					</Typography>
					<Typography
						className={`${classes.publisher} ${overflowLine1}`}
						style={{ transition: 'all .3s', opacity: state }}>
						<span style={{ fontFamily: 'fangzheng-bold' }}>
							{article.content.publisherName}
						</span>
						{'·'}
						{article.content.time}
					</Typography>
				</Box>
			</Box>
		</Link>
  );
};

export default TopStoryCard;
