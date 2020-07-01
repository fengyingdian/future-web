/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchMenus, fetchLiveSection } from '../src/service/index';
import Live from '../src/containers/lives/index';
import useFonts from '../src/hooks/useFonts';

const Index = (props: any) => {
  const classes = useStyles();

  useFonts();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Live {...props} />
    </Container>
  );
};

Index.getInitialProps = async ({ query }: any) => {
  const { sp = 'rtmp' } = query;

  const menus: any = await fetchMenus();

  const { streams = [] }: any = await fetchLiveSection();

  return {
    menus,
    streams,
    sp,
  };
};

export default withRouter(Index);
