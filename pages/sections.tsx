/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchMenus, fetchArticleSection } from '../src/service/index';
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

	const menus: any = await fetchMenus();

	const {
		articles,
		newoffset: offset,
	}: any = await fetchArticleSection(name, 0, 20);

	return {
		name, articles, offset, limit: 20, menus,
	};
};

export default withRouter(Index);
