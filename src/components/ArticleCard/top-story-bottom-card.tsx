/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Card, CardMedia, Link, Box,
} from '@material-ui/core';
import moment from 'moment';
import { prop } from 'ramda';
import { TagLarge } from './tag';
import useCommonStyles from '../../theme/styles';
import { defaultCoverImage } from '../../constants/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'space-between',
    margin: theme.spacing(2, 0, 0),
    padding: theme.spacing(3),
    borderTop: '4px solid rgb(243, 44, 41)',
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
    [theme.breakpoints.up(800)]: {
      display: 'flex',
      height: 232,
    },
    [theme.breakpoints.up(1024)]: {
      height: 302,
    },
  },
  image: {
    width: '38%',
    background: '#f8f8f8',
    [theme.breakpoints.up(800)]: {
      height: 180,
    },
    [theme.breakpoints.up(1024)]: {
      height: 250,
    },
  },
  infoBox: {
    flex: 1,
    margin: theme.spacing(0, 3, 0, 0),
    position: 'relative',
    top: 0,
    left: 0,
  },
  tag: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: theme.spacing(-0.5, 0, 0),
  },
  title: {
    lineHeight: 1.5,
    color: 'rgb(163, 9 ,10)',
    padding: theme.spacing(0),
    [theme.breakpoints.up(800)]: {
      fontSize: 20,
    },
    [theme.breakpoints.up(1024)]: {
      height: 26,
    },
  },
  excerpt: {
    lineHeight: 1.5,
    color: 'rgb(102, 102, 102)',
    margin: theme.spacing(1.5, 0, 0),
    fontFamily: 'fangzheng-light',
    [theme.breakpoints.up(800)]: {
      fontSize: 14,
    },
    [theme.breakpoints.up(1024)]: {
      height: 16,
    },
  },
  publisher: {
    fontSize: 12,
    lineHeight: 1.5,
    color: 'rgb(163, 9, 10)',
    margin: theme.spacing(2, 0, 0),
    fontFamily: 'fangzheng-medium',
    position: 'absolute',
    bottom: 0,
    left: 0,
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
    cover = null, tags, title = '', excerpt = '', id = '', categoryName = '', date = '', publisherName = '',
  } = props;

  const url = prop('url', cover);

  const tag = tags.length > 0 ? tags : [categoryName];
  const time = moment(date).format('YYYY/MM/DD');

  return (
    <Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
      <Card className={classes.root}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          flexWrap={'nowrap'}
          className={classes.infoBox}>
          <div className={classes.tag}>
            {tag && (<TagLarge tag={tag} />)}
          </div>
          <Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
            {title}
          </Typography>
          <Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
            {excerpt}
          </Typography>
          <Typography className={`${classes.publisher} ${overflowLine1}`}>
            <span style={{ fontFamily: 'fangzheng-bold' }}>
              {publisherName}
            </span>
            {'·'}
            {time}
          </Typography>
        </Box>
        <CardMedia
          className={classes.image}
          image={defaultCoverImage}
          data-src={url}
          data-lazyload
          title={title} />
      </Card>
    </Link>
  );
};

export default ArticleCard;
