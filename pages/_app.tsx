/* eslint-disable max-len */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';
import Theme from '../src/model/theme';
import { ColStart } from '../src/components/index';

const Container = styled(ColStart)`
  align-items: center;
  width: 100%;
`;

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
			<Container>
				<Head>
					<title>{'Flipboard News'}</title>
					<meta name={'theme-color'} content={Theme.palette.primary.main} />
					<meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
					<meta name={'viewport'} content={'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'} />
					<meta name={'format-detection'} content={'telephone=no'} />
					<meta name={'referrer'} content={'origin'} />
					<meta name={'renderer'} content={'webkit'} />
					<meta name={'wap-font-scale'} content={'no'} />
				</Head>
				<ThemeProvider theme={Theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</Container>
		);
	}
}
