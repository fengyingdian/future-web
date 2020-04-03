/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchArticleTranscode, fetchArticleSection } from '../src/service/index';
import Article from '../src/containers/articles/index';

const Index = (props: any) => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Article {...props} />
		</Container>
	);
};

Index.getInitialProps = async ({ query = {} }: any) => {
	const { id = '', category: categoryName = '' } = query;

	const result: any = await fetchArticleTranscode(id);

	const {
		articles,
	}: any = await fetchArticleSection(categoryName, 0, 3);

	return {
		categoryName,
		articles,
		...result,
	};
};

export default withRouter(Index);
