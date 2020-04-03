/* eslint-disable max-len */
import React from 'react';
import {
	Grid, Box,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ArticleCard from '../ArticleCard/tag-normal-small-card';
import ArticleCardLarge from '../ArticleCard/tag-normal-large-card';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		margin: theme.spacing(1, 0, 2),
	},
	first: {
		width: '100%',
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
			padding: theme.spacing(0, 1),
		},
	},
	othersRoot: {
		maxWidth: '100%',
		boxSizing: 'border-box',
	},
	others: {
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
}));

const ResponsibleTagTriple = (props: any) => {
	const classes = useStyles();
	const { articles = [] } = props;
	if (articles.length <= 0) {
		return (<> </>);
	}
	const [first] = articles;
	const others = articles.slice(1, 5);

	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			flexWrap={'wrap'}
			className={classes.root}>
			<Grid className={classes.first}>
				<ArticleCardLarge
					{...first} />
			</Grid>
			<Box
				display={'flex'}
				flexDirection={'row'}
				flexWrap={'wrap'}
				className={classes.othersRoot}>
				{others.map((article: any) => (
					<Grid id={article.id} className={classes.others}>
						<ArticleCard
							{...article} />
					</Grid>
				))}
			</Box>
		</Box>
	);
};

export default ResponsibleTagTriple;
