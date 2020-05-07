import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, Container } from '@material-ui/core';
import moment from 'moment';
import ArticleContent from './content';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    background: '#fff',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.up(800)]: {
      padding: theme.spacing(0, 5.5),
    },
    [theme.breakpoints.up(1024)]: {
      padding: theme.spacing(0, 6.5),
    },
  },
  tag: {
    fontSize: 12,
    margin: theme.spacing(4.25, 1, 0, 0),
    color: 'rgb(163,9,10)',
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
  title: {
    fontSize: 18,
    lineHeight: 1.5,
    margin: theme.spacing(3, 0, 0),
    color: '#444',
    [theme.breakpoints.up('sm')]: {
      fontSize: 26,
    },
  },
  subtitle: {
    fontSize: 10,
    width: '100%',
    padding: theme.spacing(3, 0, 3),
    borderBottom: '1px solid #eee',
    color: 'rgb(163, 9, 10)',
    fontFamily: 'fangzheng-medium',
    [theme.breakpoints.up('sm')]: {
      fontSize: 12,
      padding: theme.spacing(3, 0, 4),
    },
  },
  cover: {
    margin: theme.spacing(4, 6),
    height: 0,
    paddingTop: '40%',
  },
  content: {
    margin: theme.spacing(4, 0),
    maxWidth: theme.breakpoints.width('sm'),
  },
}));

const ArticleRender = (props: any) => {
  const classes = useStyles();

  const {
    title = '',
    contents = [],
    publisherName = '',
    date = '',
    categoryName = '',
    tags = [],
    // cover: {
    // 	url = '',
    // } = {},
  } = props;
  const labels = tags.length > 0 ? tags : [categoryName];
  const time = moment(date).format('YYYY/MM/DD');

  return (
    <Container
      maxWidth={false}
      className={classes.root}>
      <Box
        display={'flex'}
        flexDirection={'row'}>
        {labels.map((tag: string, index: number) => (
          <Typography key={index} className={classes.tag}>
            {tag}
          </Typography>
        ))}
      </Box>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.subtitle}>
        <span style={{ fontFamily: 'fangzheng-bold' }}>
          {publisherName}
        </span>
        {'·'}
        {time}
      </Typography>
      {/* <CardMedia
				className={classes.cover}
				image={url}
				title={title} /> */}
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyItems={'flex-start'}
        alignItems={'center'}
        alignSelf={'center'}
        className={classes.content}>
        <ArticleContent contents={contents} />
      </Box>
    </Container>
  );
};

export default ArticleRender;
