import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Link, Typography, Box, CardMedia,
} from '@material-ui/core';
import useCommonStyles from '../../../../theme/styles';
import { livePreviewCover, livePlayButton } from '../../../../constants/index';
import { getLiveCardHeight } from '../../../../utils/live';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    padding: theme.spacing(0),
    background: '#f8f8f8',
    transition: 'all .3s',
    '&:hover': {
      transform: 'translateY(-3px)',
      // boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
      '& #content': {
        color: '#ddd',
      },
      '& #excerpt': {
        // color: '#e8e8e8',
      },
    },
    [theme.breakpoints.down('sm')]: {
      height: 297,
      padding: theme.spacing(0),
      margin: theme.spacing(0, 0, 1),
    },
    [theme.breakpoints.up('sm')]: {
      height: 297,
      padding: theme.spacing(0),
      margin: theme.spacing(0, 0, 3.25),
    },
    [theme.breakpoints.up(800)]: {
      height: 0,
    },
    [theme.breakpoints.up(1024)]: {
      padding: theme.spacing(0),
    },
    position: 'relative',
    top: 0,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  maskBox: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  tipsBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  tipsIcon: {
    background: '#CE4127',
    width: 64,
    minWidth: 64,
    margin: theme.spacing(0),
    opacity: 0.7,
    '&::after': {
      height: 0,
      paddingTop: '100%',
    },
  },
  tipsContent: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    background: 'rgba(184, 18, 19, .4)',
    lineHeight: '64px',
    height: 64,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
  },
}));

const Live = (props: any) => {
  const { stream = {}, isPlan = false, clientWidth = 0 } = props;

  const paddingTop = (() => {
    if (clientWidth) {
      return getLiveCardHeight(clientWidth);
    }

    return 297;
  })();
  const classes = useStyles();
  const {
    status = 'publish_done',
  } = stream;
  const {
    overflowLine1,
  } = useCommonStyles();

  return (
    <Link
      style={{
        width: '100%',
      }}
      href={'/lives?sp=m3u8'}
      underline={'none'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        style={{
          paddingTop,
        }}
        className={classes.root}>
        <CardMedia
          className={classes.image}
          image={livePreviewCover}
          title={'live-cover'} />
        <div className={classes.maskBox}>
          <div className={classes.tipsBox}>
            <img className={classes.tipsIcon} src={livePlayButton} alt={''} />
            <Typography id={'content'} className={`${classes.tipsContent} ${overflowLine1}`}>
              {isPlan ? '时客直播即将开始' : (status === 'publish' ? '时客直播中' : '时客直直播已结束')}
            </Typography>
          </div>
        </div>
      </Box>
    </Link>
  );
};

export default Live;
