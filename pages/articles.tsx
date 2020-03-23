import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import useStyles from '../src/model/styles';

const Article = (props: any) => {
	const classes = useStyles();
	const { router: { query: { id = '' } = {} } = {} } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<Typography>
				{' '}
				{'ARTICLE '}
				{id}
				{' '}
			</Typography>
		</Container>
	);
};

Article.getInitialProps = async ({ res, err }: any) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : null;

	return { statusCode };
};

export default withRouter(Article);
