/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../components/ArticleSection/section-article-title';
import MenuHeader from '../../components/MenuHeader/index';
import ArticleContent from './components/Render/header';
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
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 2),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(3.5, 3),
		},
		[theme.breakpoints.up(800)]: {
			padding: theme.spacing(4.5, 3.5),
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(5.5, 4),
		},
	},
}));

const Article = (props: any) => {
	const classes = useStyles();
	const {
		title,
		categoryName,
		menus,
	} = props;

	const { displayName } = menus.find(({ name: menuName }: any) => categoryName === menuName);

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{title}
				</title>
			</Head>
			<Container maxWidth={false} className={classes.root}>
				<MenuHeader selected={categoryName} menus={menus} />
				<Container maxWidth={'md'} className={classes.sectionRoot}>
					<Title title={displayName} />
					<ArticleContent {...props} />
				  {/* <RelativeSection articles={articles} /> */}
				</Container>
			</Container>
		</Container>
	);
};

export default Article;
