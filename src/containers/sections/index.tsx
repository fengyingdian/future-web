/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../components/ArticleSection/section-page-title';
import Page from './components/Page/index';
import MenuHeader from '../../components/MenuHeader/index';
import { fetchArticleSection } from '../../service/index';
import { lazyload } from '../../utils/image';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '100%',
		padding: '0',
		background: 'rgb(163, 9, 10)',
	},
	sectionRoot: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: theme.breakpoints.width('lg'),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 1, 0),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(2, 1.5, 0),
		},
		[theme.breakpoints.up(800)]: {
			padding: theme.spacing(2, 2.5, 0),
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(2, 3, 0),
		},
	},
}));

const Section = (props: any) => {
	const classes = useStyles();
	const {
		name,
		limit,
		offset,
		articles,
		menus,
	} = props;

	const { displayName } = menus.find(({ name: menuName }: any) => name === menuName);

	const [state, setstate] = useState({
		pages: [
			articles,
		],
		offset,
	});

	const isReachedBottom = (bottomDistance: number) => {
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
		if (articles.length === limit) {
			setstate({
				pages: [
					...state.pages,
					newArticles,
				],
				offset: newoffset,
			});
		}
	};

	const bindScroll = () => {
		if (isReachedBottom(200)) {
			fetchData();
		}
		lazyload();
	};

	useEffect(() => {
		// init
		lazyload();

		// listener
		window.addEventListener('scroll', bindScroll);

		// (document as any).fonts.ready.then(() => {
		// 	console.log('fonts ready section page');
		// });

		return () => window.removeEventListener('scroll', bindScroll);
	});

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{`${displayName}-人民数字联播网`}
				</title>
			</Head>
			<Container maxWidth={false} className={classes.root}>
				<MenuHeader selected={name} menus={menus} />
				<Container maxWidth={false} className={classes.sectionRoot}>
					<Title title={displayName} />
					{state.pages.map((pageArticles: any, index: number) => (
						<Page key={index} articles={pageArticles} />
					))}
				</Container>
			</Container>
		</Container>
	);
};

export default Section;
