/* eslint-disable max-len */

import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchMenus, fetchHomeFeed } from '../src/service/index';
import Main from '../src/containers/main/index';
import useZhugeIoSdk from '../src/hooks/useZhugeIoSdk';
import useFonts from '../src/hooks/useFonts';

export const Index = (props: any) => {
  const classes = useStyles();

  useFonts();

  useZhugeIoSdk();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Main {...props} />
    </Container>
  );
};

Index.getInitialProps = async ({ req }: any) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  const menus: any = await fetchMenus();
  const data: any = await fetchHomeFeed();

  return { userAgent, ...data, menus };
};

export default withRouter(Index);
