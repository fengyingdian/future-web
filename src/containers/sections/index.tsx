/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../components/ArticleSection/section-page-title';
import Page from './components/Page/index';
import { fetchArticleSection } from '../../service/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '1280px',
		padding: theme.spacing(0, 2),
	},
}));

const Section = (props: any) => {
	const classes = useStyles();
	const {
		name,
		limit,
		pageKey,
		articles,
	} = props;

	const [state, setstate] = useState({
		pages: [
			articles,
		],
		pageKey,
	});

	const debounce = (func: Function, delay: number) => {
		let timeout: any = null;

		return () => {
			if (timeout !== null) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(func, delay);
		};
	};

	const fetchData = async () => {
		const {
			articles: newArticles,
			newPageKey,
		}: any = await fetchArticleSection(name, state.pageKey, limit);
		setstate({
			pages: [
				...state.pages,
				newArticles,
			],
			pageKey: newPageKey,
		});
	};

	const bindScroll = () => {
		const clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight;
		const scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
		if (scrollTop !== 0 && clientHeight + scrollTop < scrollHeight - 200) {
			debounce(fetchData, 1000)();
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
					{`${name}-${limit}-${pageKey}`}
				</title>
			</Head>
			<Container maxWidth={false} className={classes.root}>
				<Title title={name} />
				{state.pages.map((pageArticles: any) => (
					<Page articles={pageArticles} />
				))}
			</Container>
		</Container>
	);
};

export default Section;
