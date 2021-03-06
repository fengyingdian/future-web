/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable max-len */

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core';
import Theme from '../src/theme/theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Flipboard China</title>
          <meta name="theme-color" content={Theme.palette.primary.main} />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="referrer" content="origin" />
          <meta name="renderer" content="webkit" />
          <meta name="wap-font-scale" content="no" />
          <link rel="SHORTCUT ICON" href="http://s.flipboard.cn/assets/logo/favicon.ico" type="image/icon" />
          <link rel="ICON" href="http://s.flipboard.cn/assets/logo/favicon.ico" type="image/ico" />
          <link rel="shortcut icon" href="http://s.flipboard.cn/assets/logo/favicon.ico" />
          <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css" />
          <link rel="stylesheet" href="https://sapp.flipboard.cn/fabulous/fonts/fangzheng.css" />
          <script type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-h5-min.js" />
          <script data-ad-client="ca-pub-5018007571358298" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        </Head>
        <ThemeProvider theme={Theme}>
          <Box
            maxWidth="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <CssBaseline />
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </>
    );
  }
}
