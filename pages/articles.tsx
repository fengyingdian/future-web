/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchArticleTranscode } from '../src/service/index';
import Article from '../src/containers/articles/index';

const Index = (props: any) => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Article contents={props.contents} />
		</Container>
	);
};

Index.getInitialProps = async ({ query = {} }: any) => {
	const { id = '' } = query;

	const contents = await fetchArticleTranscode(id);

	return { contents };
};

export default withRouter(Index);
