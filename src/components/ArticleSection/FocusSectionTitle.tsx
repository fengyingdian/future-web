/* eslint-disable max-len */
import React from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: 24,
    lineHeight: '22px',
    color: '#fff',
    width: '100%',
    boxSizing: 'border-box',
    borderBottom: '4px solid rgb(243, 44, 41)',
    fontFamily: 'inherit',
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
      lineHeight: '24px',
    },
  },
}));

export const Title = (props: any) => {
  const classes = useStyles();
  const { title = '' } = props;

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.root}>
      <Typography className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

export default {};
