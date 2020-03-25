/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
// import Render from 'react-transcode-render/lib/index';
// import 'react-transcode-render/lib/main.min.css';
import useStyles from '../src/theme/styles';
// import Render from '../src/render';
import { fetchSection } from '../src/service/index';

const Section = (props: any) => {
	const classes = useStyles();
	const { id = '' } = props;

	return (
		<Container maxWidth={'sm'} className={classes.root}>
			<p>
				{' '}
				{'Section '}
				{id}
			</p>
		</Container>
	);
};

Section.getInitialProps = async ({ query = {} }: any) => {
	const { id = '' } = query;

	const results = await fetchSection(id);

	return { results, id };
};

export default withRouter(Section);
