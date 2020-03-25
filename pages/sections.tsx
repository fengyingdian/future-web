/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchSection } from '../src/service/index';
import ResponsibleSection from '../src/components/ArticleSection/responsible-section';

const Section = (props: any) => {
	const classes = useStyles();
	const { id = '', name = '', articles = [] } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<ResponsibleSection key={id} name={name} id={id} articles={articles} />
		</Container>
	);
};

Section.getInitialProps = async ({ query = {} }: any) => {
	const { id = '' } = query;

	const section = await fetchSection(id);

	return { ...section };
};

export default withRouter(Section);
