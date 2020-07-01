import React from 'react';
import {
  Container, Box, Typography, Link,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Skeleton } from '@material-ui/lab';
import { LOGO_WITH_TEXT } from '../../constants/logo';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    width: '100%',
    height: 118,
    boxSizing: 'border-box',
    background: 'linear-gradient(to right, rgb(194, 22, 23), rgb(162, 9, 10))',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    maxWidth: theme.breakpoints.width('lg'),
    width: '100%',
    padding: theme.spacing(0, 3),
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up(800)]: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: theme.spacing(0, 3),
    },
  },
  logo: {
    minWidth: 288,
    width: 288,
    [theme.breakpoints.down(800)]: {
      width: 168,
      minWidth: 168,
    },
  },
  menuBox: {
    flex: 1,
    [theme.breakpoints.down(800)]: {
      margin: theme.spacing(0, 0, 0),
    },
    [theme.breakpoints.up(800)]: {
      margin: theme.spacing(0, 12, 0),
    },
    [theme.breakpoints.up(950)]: {
      margin: theme.spacing(0, 17, 0),
    },
    [theme.breakpoints.up(1100)]: {
      margin: theme.spacing(0, 27, 0),
    },
  },
  title: {
    color: '#fff',
    fontSize: 16,
    lineHeight: '22px',
    transition: 'all .3s',
    textAlign: 'center',
    padding: theme.spacing(0, 1),
    fontFamily: 'inherit',
    '&:hover': {
      // textShadow: '#f8f8f8 0.1em 0.1em 0.2em',
      fontFamily: 'fangzheng-medium',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      lineHeight: '24px',
    },
    [theme.breakpoints.up(800)]: {
      fontSize: 20,
      lineHeight: '32px',
    },
  },
  underline: {
    width: 16,
    height: 4,
    marginTop: 2,
    background: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: 14,
    },
  },
  skeleton: {
    width: '100%',
    padding: theme.spacing(4),
  },
}));

const herf = (name: string) => {
  if (name === '首页') {
    return '/';
  }
  if (name === '直播') {
    return '/lives?sp=m3u8';
  }

  return `/sections?name=${name}`;
};

const MenuHeader = (props: any) => {
  const classes = useStyles();
  const { menus = [], selected = '首页' } = props;

  // if (skeleton) {
  // 	return (
  // 		<div className={classes.skeleton}>
  // 			<Skeleton />
  // 			<Skeleton animation={false} />
  // 			<Skeleton animation={'wave'} />
  // 		</div>
  // 	);
  // }

  return (
    <Container maxWidth={false} className={classes.root}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        flexWrap="wrap"
        className={classes.innerBox}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="nowrap"
          className={classes.menuBox}
        >
          {menus.map(({ name, displayName }: any) => (
            <Link key={name} href={herf(name)} underline="none">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flexWrap="nowrap"
              >
                <Typography id={'font-black'} className={classes.title}>
                  {displayName}
                </Typography>
                <div
                  className={classes.underline}
                  style={{
                    background: selected === name ? '#fff' : 'transparent',
                  }}
                />
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default MenuHeader;
