/* eslint-disable max-len */
import React from 'react';
import {
  Grid, Box,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ArticleCard from '../ArticleCard/normal-small-card';
import ArticleCardLarge from '../ArticleCard/normal-large-card';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: '100%',
    margin: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1, 0, 0),
    },
    [theme.breakpoints.up(1024)]: {
      margin: theme.spacing(1, 0, 2),
    },
  },
  first: {
    width: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 1, 0),
      padding: theme.spacing(0, 0, 0),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 1, 0),
      padding: theme.spacing(0, 0, 2),
    },
    [theme.breakpoints.up(1024)]: {
      padding: theme.spacing(0, 0, 2),
    },
  },
  othersRoot: {
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  others: {
    maxWidth: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1, 0),
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      flex: 1,
      margin: theme.spacing(0, 0, 2),
      padding: theme.spacing(0, 1, 0),
      minWidth: '50%',
    },
    [theme.breakpoints.up(1024)]: {
      margin: theme.spacing(0),
      padding: theme.spacing(0, 1, 0),
      minWidth: '25%',
    },
  },
}));

const ResponsibleTagFive = (props: any) => {
  const classes = useStyles();
  const { articles = [] } = props;
  if (articles.length <= 0) {
    return (<> </>);
  }
  const [first] = articles;
  const others = articles.slice(1, 5);

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      className={classes.root}>
      <Grid className={classes.first}>
        <ArticleCardLarge
          {...first} />
      </Grid>
      <Box
        display={'flex'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        className={classes.othersRoot}>
        {others.map((article: any, index: number) => (
          <Grid key={index} className={classes.others}>
            <ArticleCard
              {...article} />
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default ResponsibleTagFive;
