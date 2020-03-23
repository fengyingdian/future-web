import React from 'react';
import {
	Box, Typography, Link,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(4, 0, 1),
		padding: theme.spacing(1, 0, 0),
		width: '100%',
		borderTop: '10px solid #f52828',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 16,
		fontWeight: 900,
	},
	more: {
		fontSize: 14,
	},
}));

const Title = (props: any) => {
	const classes = useStyles();
	const { title = '' } = props;

	return (
		<Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} className={classes.root}>
			<Typography className={classes.title}>
				{title}
			</Typography>
			<Link href={'/openlink'} className={classes.more}>
				{'更多'}
			</Link>
		</Box>
	);
};

export default Title;
