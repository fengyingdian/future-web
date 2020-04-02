/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Title, ReadMore } from './section-block-title';
import ResponsibleTagArticles from './responsible-tag-five-articles';

const useStyles = makeStyles(() => createStyles({
	root: {
		maxWidth: '100%',
	},
}));

const ResponsibleTagTripleSection = (props: any) => {
	const classes = useStyles();
	const { name = '', id = '', articles = [] } = props;
	if (articles.length <= 0) {
		return (<> </>);
	}

	return (
		<div className={classes.root}>
			<Title title={name} />
			<ResponsibleTagArticles articles={articles} />
			<ReadMore id={id} name={name} />
		</div>
	);
};

export default ResponsibleTagTripleSection;
