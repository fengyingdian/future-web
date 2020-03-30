/* eslint-disable max-len */

import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchHomeFeed } from '../src/service/index';
import Main from '../src/containers/main/index';

export const Index = (props: any) => {
	const classes = useStyles();
	const { sections = [] } = props;
	const menus = sections.map(({ name, id }: any) => ({ name, id }));

	return (
		<Container maxWidth={false} className={classes.root}>
			<Main menus={menus} sections={sections} />
		</Container>
	);
};

Index.getInitialProps = async ({ req }: any) => {
	const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
	const sections = await fetchHomeFeed();

	return { userAgent, sections };
};

export default withRouter(Index);
