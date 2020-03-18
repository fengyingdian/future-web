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
					<meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width'} />
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
