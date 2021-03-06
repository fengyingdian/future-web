/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  Box, Container, Typography, CardMedia,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { LIVE_BK_COVER } from '../../../../constants/index';

declare const Aliplayer: any;


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    margin: theme.spacing(0, 0, 2),
    padding: theme.spacing(2),
    background: '#fff',
  },
  vedioBox: {
    width: '100%',
    height: 0,
    paddingTop: '60%',
    position: 'relative',
    top: 0,
    left: 0,
  },
  vedio: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 18,
    lineHeight: '30px',
    color: '#444',
    margin: theme.spacing(1.5, 0, 0),
    fontFamily: 'inherit',
    [theme.breakpoints.up('sm')]: {
      fontSize: 26,
      lineHeight: '40px',
      margin: theme.spacing(2, 0, 0.25),
    },
  },
  description: {
    fontSize: 14,
    lineHeight: '22px',
    color: '#666',
    fontFamily: 'fangzheng-light',
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      lineHeight: '32px',
    },
  },
}));

const LiveSection = (props: any) => {
  const classes = useStyles();
  const { sp = '', stream = {} } = props;
  const {
    status = 'publish_done',
    title = '',
    description = '',
    play: {
      lsd: {
        rtmp = '',
        m3u8 = '',
      } = {},
    } = {},
  } = stream;

  useEffect(() => {
    if (Aliplayer) {
      const player = new Aliplayer({
        id: 'J_prismPlayer',
        width: '100%',
        autoplay: true,
        isLive: true,
        source: sp === 'm3u8' ? m3u8 : rtmp,
      }, (() => {
        console.log('player loaded', player);
      }));
    }
  });

  return (
    <Container maxWidth={false} className={classes.root}>
      <Box
        display="flex"
        flexDirection="clomun"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        className={classes.vedioBox}
      >
        <div
          className={`${classes.vedio} prism-player`}
          id="J_prismPlayer"
          style={{
            height: '100%',
            display: status === 'publish_done' ? 'none' : '',
          }}
        />
        {status === 'publish_done' && (
          <CardMedia
            className={classes.vedio}
            style={{
              height: '100%',
            }}
            image={LIVE_BK_COVER}
          />
        )}
      </Box>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.description}>
        {description}
      </Typography>
    </Container>
  );
};

export default LiveSection;
