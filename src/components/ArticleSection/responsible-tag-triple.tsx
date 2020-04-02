/* eslint-disable max-len */
import React from 'react';
import {
	Grid, Box,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ArticleCardShortImage } from '../ArticleCard/tag-normal-card';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		margin: theme.spacing(2, 0, 2),
	},
	first: {
		maxWidth: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			margin: theme.spacing(0, 0, 0),
		  padding: theme.spacing(0, 0, 2),
		},
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(0, 0, 4),
			padding: theme.spacing(0, 0, 4),
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 0, 0),
			padding: theme.spacing(0, 1),
			flex: 1,
		},
	},
	second: {
		maxWidth: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 0, 2),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 1, 0),
			maxWidth: '50%',
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 0, 0),
			padding: theme.spacing(0, 1),
			flex: 1,
		},
	},
	third: {
		maxWidth: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 0, 1),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 0, 0, 1),
			maxWidth: '50%',
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(0, 1),
			flex: 1,
		},
	},
}));

const ResponsibleTagTriple = (props: any) => {
	const classes = useStyles();
	const { articles = [] } = props;
	if (articles.length <= 0) {
		return (<> </>);
	}
	const [first, second, third] = articles;

	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			flexWrap={'wrap'}
			className={classes.root}>
			<Grid className={classes.first}>
				<ArticleCardShortImage
					{...first} />
			</Grid>
			<Grid className={classes.second}>
				<ArticleCardShortImage
					{...second} />
			</Grid>
			<Grid className={classes.third}>
				<ArticleCardShortImage
					{...third} />
			</Grid>
		</Box>
	);
};

export default ResponsibleTagTriple;
