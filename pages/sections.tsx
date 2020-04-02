/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchArticleSection } from '../src/service/index';
import Section from '../src/containers/sections/index';

const Index = (props: any) => {
	const classes = useStyles();
	const { section } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<Section section={section} />
		</Container>
	);
};

Index.getInitialProps = async ({ query = {} }: any) => {
	const { name = '' } = query;

	const { section }: any = await fetchArticleSection(name);

	return { section };
};

export default withRouter(Index);
