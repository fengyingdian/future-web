/* eslint-disable max-len */

import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchMenus, fetchHomeFeed } from '../src/service/index';
import Main from '../src/containers/main/index';

export const Index = (props: any) => {
	const classes = useStyles();
	const { sections = [], hotnews = [], menus } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<Main sections={sections} hotnews={hotnews} menus={menus} />
		</Container>
	);
};

Index.getInitialProps = async ({ req }: any) => {
	const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

	const menus = await fetchMenus();
	const data = await fetchHomeFeed();

	return { userAgent, ...data, menus };
};

export default withRouter(Index);
