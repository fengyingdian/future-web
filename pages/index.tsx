import React from 'react';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import NavButton from '../src/components/NavButton';
import useStyles from '../src/model/styles';
import FlexColumn from '../src/components/FlexColumns/index';
// import Card from '../src/components/Card/index';
// import VirtualizedList from '../src/components/List';

export const Index = () => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			{/* <Typography variant={'h4'} component={'h1'} gutterBottom className={classes.titleLarge}>
				{'Guide'}
			</Typography> */}
			{/* <NavButton link={'/openlink'} title={'OpenLink'} />
			<NavButton link={'/edit'} title={'Edit News'} />
			<NavButton link={'/quote'} title={'Quote From Link'} />
			<NavButton link={'/preview'} title={'Preview News'} /> */}
			<FlexColumn />
			{/* <Card /> */}
			{/* <VirtualizedList /> */}
		</Container>
	);
};

export default Index;
