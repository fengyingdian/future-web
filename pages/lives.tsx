/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchMenus, fetchLiveSection } from '../src/service/index';
import Live from '../src/containers/lives/index';

const Index = (props: any) => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Live {...props} />
		</Container>
	);
};

Index.getInitialProps = async () => {
	// const { name = '' } = query;

	const menus: any = await fetchMenus();

	const { streams = [] }: any = await fetchLiveSection();

	return {
		menus,
		streams,
	};
};

export default withRouter(Index);
