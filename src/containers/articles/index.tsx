/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ArticleContent from './components/Render/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: theme.spacing(0),
	},
}));

interface Props {
  contents: any,
}

const Article = (props: Props) => {
	const classes = useStyles();
	const { contents } = props;

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{'文章页'}
				</title>
			</Head>
			<Container maxWidth={'sm'} className={classes.root}>
				<ArticleContent contents={contents} />
			</Container>
		</Container>
	);
};

export default Article;
