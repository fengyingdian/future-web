/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ResponsibleArticles from '../../../../components/ArticleSection/responsible-tag-five-articles';

const useStyles = makeStyles(() => createStyles({
	root: {
		maxWidth: '100%',
	},
}));

const Page = (props: any) => {
	const classes = useStyles();
	const { articles = [] } = props;

	if (articles.length <= 0) {
		return (<> </>);
	}

	const firstArticles = articles.slice(0, 5);
	const seconArticles = articles.slice(5, 10);
	const thirdArticles = articles.slice(10, 15);
	const fourtArticles = articles.slice(15, 20);

	return (
		<div className={classes.root}>
			<ResponsibleArticles articles={firstArticles} />
			<ResponsibleArticles articles={seconArticles} />
			<ResponsibleArticles articles={thirdArticles} />
			<ResponsibleArticles articles={fourtArticles} />
		</div>
	);
};

export default Page;
