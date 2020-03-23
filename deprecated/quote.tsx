import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from '../src/model/styles';

export const Quote = () => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Typography variant={'h4'} component={'h1'} gutterBottom className={classes.titleMiddle}>
				{'Quote From Link'}
			</Typography>
		</Container>
	);
};

export default Quote;
