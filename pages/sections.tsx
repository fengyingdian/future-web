/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchArticleSection } from '../src/service/index';
import Section from '../src/containers/sections/index';

const Index = (props: any) => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Section {...props} />
		</Container>
	);
};

Index.getInitialProps = async ({ query = {} }: any) => {
	const { name = '' } = query;

	const {
		articles,
		newPageKey: pageKey,
	}: any = await fetchArticleSection(name, 0, 20);

	return {
		name, articles, pageKey, limit: 20,
	};
};

export default withRouter(Index);
