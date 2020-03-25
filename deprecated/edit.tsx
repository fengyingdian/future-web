import React from 'react';
import { Container, Typography, TextField } from '@material-ui/core';
import useStyles from '../src/theme/styles';

export const Edit = () => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} className={classes.root}>
			<Typography variant={'h4'} component={'h2'} gutterBottom className={classes.titleMiddle}>
				{'Edit Your News'}
			</Typography>
			<Container maxWidth={false} className={classes.leftSide}>
				<TextField
					id={'standard-basic'}
					label={'Title'}
					margin={'dense'}
					className={classes.textFiled}
				/>
				<TextField
					id={'standard-basic'}
					label={'Author'}
					margin={'dense'}
					className={classes.textFiled}
				/>
				<TextField
					id={'standard-basic'}
					label={'content'}
					multiline
					rows={'4'}
					rowsMax={'4'}
					margin={'dense'}
					className={classes.multiText}
					// variant={'outlined'}
				/>
				<input id={'upload'} type={'file'} accept={'image/*;'} />
			</Container>
		</Container>
	);
};

export default Edit;
