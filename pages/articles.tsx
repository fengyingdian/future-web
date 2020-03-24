/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import axios from 'axios';
import useStyles from '../src/model/styles';
import Render from '../src/render';

const transcodeUrl = (id: string) => `http://flipboard-cn-static.oss-cn-hangzhou.aliyuncs.com/fleural/mtoutiaocom/labeled-contents/${id}.json`;

const Article = (props: any) => {
	const classes = useStyles();

	return (
		<Container maxWidth={'sm'} className={classes.root}>
			<Render contents={props.results} />
		</Container>
	);
};

Article.getInitialProps = async (req: any) => {
	const { query: { id = '' } = { } } = req;

	const results = await axios.get(transcodeUrl(id))
		.then((response: any) => {
			const { contents = [] } = response.data;

			return contents;
		})
		.catch((error: any) => {
			console.log(error);
		});

	return { results };
};

export default withRouter(Article);
