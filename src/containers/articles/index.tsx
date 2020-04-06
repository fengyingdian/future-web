/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../components/ArticleSection/section-article-title';
import MenuHeader from '../../components/MenuHeader/index';
import ArticleContent from './components/Render/index';
// import RelativeSection from '../../components/ArticleSection/responsible-tag-relative-section';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '100%',
		padding: '0',
		background: '#f8f8f8',
	},
	sectionRoot: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: theme.spacing(5.5, 4),
		maxWidth: theme.breakpoints.width('lg'),
	},
}));

const Article = (props: any) => {
	const classes = useStyles();
	const {
		title,
		categoryName,
		menus,
	} = props;

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{title}
				</title>
			</Head>
			<Container maxWidth={false} className={classes.root}>
				<MenuHeader selected={categoryName} menus={menus} />
				<Container maxWidth={false} className={classes.sectionRoot}>
					<Title title={categoryName} />
					<ArticleContent {...props} />
				  {/* <RelativeSection articles={articles} /> */}
				</Container>
			</Container>
		</Container>
	);
};

export default Article;
