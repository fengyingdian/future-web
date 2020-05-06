/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Card, CardMedia, Link, Box,
} from '@material-ui/core';
import moment from 'moment';
import { prop } from 'ramda';
import { TagRelative } from './tag';
import useCommonStyles from '../../theme/styles';
import { defaultCoverImage } from '../../constants/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'space-between',
    margin: theme.spacing(3, 0),
    padding: theme.spacing(3),
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
  },
  image: {
    width: '30%',
    height: '178px',
    background: '#f8f8f8',
  },
  infoBox: {
    flex: 1,
    margin: theme.spacing(0, 0, 0, 3),
  },
  title: {
    fontSize: 20,

    lineHeight: 1.5,
    color: '#131313',
    padding: theme.spacing(0),
  },
  excerpt: {
    flex: 1,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#666',
    margin: theme.spacing(2, 0, 0),
    fontFamily: 'fangzheng-light',
  },
  publisher: {
    fontSize: 12,
    lineHeight: 1.5,
    color: '#131313',
    margin: theme.spacing(2, 0, 0),
    fontFamily: 'fangzheng-medium',
  },
}));

const ArticleCard = (props: any) => {
  const classes = useStyles();
  // const {
  // 	overflowLine1,
  // } = useCommonStyles();
  const {
    overflowLine1, overflowLine2,
  } = useCommonStyles();

  const {
    cover = null, title = '', excerpt = '', id = '', tags = [''], categoryName = '', date = '', publisherName = '',
  } = props;

  const url = prop('url', cover);

  const [tag] = tags.length > 0 ? tags : [categoryName];
  const time = moment(date).format('YYYY/MM/DD');

  return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.image}
					image={defaultCoverImage}
					data-src={url}
					data-lazyload
					title={'article-cover'}
				/>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
					alignItems={'flex-start'}
					flexWrap={'nowrap'}
					className={classes.infoBox}>
					{tag && (<TagRelative tag={tag} />)}
					<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
						{title}
					</Typography>
					<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
						{excerpt}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
				    {`${publisherName}·${time}`}
					</Typography>
				</Box>
			</Card>
		</Link>
  );
};

export default ArticleCard;
