import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from '../src/theme/styles';

export const Preview = () => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Typography variant={'h4'} component={'h1'} gutterBottom className={classes.titleMiddle}>
				{'Preview News'}
			</Typography>
		</Container>
	);
};
export default Preview;
