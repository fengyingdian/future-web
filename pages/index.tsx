import React from 'react';
import Container from '@material-ui/core/Container';
import useStyles from '../src/model/styles';
import ResponsibleTriple from '../src/components/ArticleSection/responsible-triple';
import ResponsibleTripleReverse from '../src/components/ArticleSection/responsible-triple-reverse';
import Header from '../src/components/Header/header';

export const Index = () => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Header />
			<ResponsibleTriple title={'科技'} />
			<ResponsibleTripleReverse title={'财经'} />
			<ResponsibleTriple title={'民生'} />
			<ResponsibleTripleReverse title={'健康'} />
		</Container>
	);
};

export default Index;
