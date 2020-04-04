/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../components/ArticleSection/section-page-title';
import Page from './components/Page/index';
import MenuHeader from '../../components/MenuHeader/index';
import { fetchArticleSection } from '../../service/index';

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
		background: '#f8f8f8',
		padding: theme.spacing(4, 3),
	},
}));

const Section = (props: any) => {
	const classes = useStyles();
	const {
		name,
		limit,
		offset,
		articles,
	} = props;

	const [state, setstate] = useState({
		pages: [
			articles,
		],
		offset,
	});

	const isBottom = (bottomDistance: number) => {
		const clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight;
		const scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;

		return scrollTop !== 0 && clientHeight + scrollTop > scrollHeight - bottomDistance;
	};

	const fetchData = async () => {
		const {
			articles: newArticles,
			newoffset,
		}: any = await fetchArticleSection(name, state.offset, limit);
		setstate({
			pages: [
				...state.pages,
				newArticles,
			],
			offset: newoffset,
		});
	};

	const bindScroll = () => {
		if (isBottom(200)) {
			fetchData();
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', bindScroll);

		return () => window.removeEventListener('scroll', bindScroll);
	});

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{`${name}-${limit}-${offset}`}
				</title>
			</Head>
			<Container maxWidth={false} className={classes.root}>
				<MenuHeader />
				<Container maxWidth={false} className={classes.sectionRoot}>
					<Title title={name} />
					{state.pages.map((pageArticles: any, index: number) => (
						<Page key={index} articles={pageArticles} />
					))}
				</Container>
			</Container>
		</Container>
	);
};

export default Section;
