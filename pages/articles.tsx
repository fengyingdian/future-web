/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
// import Render from 'react-transcode-render/lib/index';
// import 'react-transcode-render/lib/main.min.css';
import useStyles from '../src/theme/styles';
import Render from '../src/render';
import { fetchArticleTranscode } from '../src/service/index';

const Article = (props: any) => {
	const classes = useStyles();

	return (
		<Container maxWidth={'sm'} className={classes.root}>
			<Render contents={props.results} />
		</Container>
	);
};

Article.getInitialProps = async ({ query = {} }: any) => {
	const { id = '' } = query;

	const results = await fetchArticleTranscode(id);

	return { results };
};

export default withRouter(Article);
