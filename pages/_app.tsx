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

// declare const zh: any;

export default class MyApp extends App {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
		}

		// const $izihun = new zh();
		// const selectors = 'render-text';
		// $izihun.add(selectors, 802);
		// $izihun.init();
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>{'人民日报'}</title>
					<meta name={'theme-color'} content={Theme.palette.primary.main} />
					<meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
					<meta name={'viewport'} content={'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'} />
					<meta name={'format-detection'} content={'telephone=no'} />
					<meta name={'referrer'} content={'origin'} />
					<meta name={'renderer'} content={'webkit'} />
					<meta name={'wap-font-scale'} content={'no'} />
					{/* <script type={'text/javascript'} src={'https://js.izihun.com/web/site/webfont/js/webfont.js'} /> */}
				</Head>
				<ThemeProvider theme={Theme}>
					<Box
						maxWidth={'100%'}
						display={'flex'}
						flexDirection={'column'}
						alignItems={'center'}>
						<CssBaseline />
						<Component {...pageProps} />
					</Box>
				</ThemeProvider>
			</>
		);
	}
}
