/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ResponsibleSection from '../../components/ArticleSection/responsible-section';

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
  section: any,
}

const Section = (props: Props) => {
	const classes = useStyles();
	const {
		section: {
			id = '',
			name = '',
			articles = '',
		},
	} = props;

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{'文章列表页'}
				</title>
			</Head>
			<Container maxWidth={false} className={classes.root}>
				<ResponsibleSection key={id} name={name} id={id} articles={articles} />
			</Container>
		</Container>
	);
};

export default Section;