/* eslint-disable max-len */

import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import ResponsibleTriple from '../src/components/ArticleSection/responsible-triple';
import ResponsibleTripleReverse from '../src/components/ArticleSection/responsible-triple-reverse';
import Header from '../src/components/Header/header';
import { fetchHomeFeed } from '../src/service/index';

export const Index = (props: any) => {
	const classes = useStyles();
	const { sections = [] } = props;
	const menus = sections.map(({ name }: any) => name);

	return (
		<Container maxWidth={false} className={classes.root}>
			<Header menus={menus} />
			{sections.map(({ name, id, articles }: any, index: any) => {
				if (index % 2 === 0) {
					return <ResponsibleTriple key={id} name={name} id={id} articles={articles} />;
				}

				return <ResponsibleTripleReverse key={id} name={name} id={id} articles={articles} />;
			})}
		</Container>
	);
};

Index.getInitialProps = async ({ req }: any) => {
	const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
	const sections = await fetchHomeFeed();
	console.log(sections);

	return { userAgent, sections };
};

export default withRouter(Index);
