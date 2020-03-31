/* eslint-disable max-len */
import React from 'react';
import {
	Grid, Box,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ArticleCardShortImage } from '../ArticleCard/tag-card';
import Title from './section-block-title';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		maxWidth: '100%',
		margin: theme.spacing(2, 0, 2),
	},
	first: {
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
			padding: theme.spacing(0, 2, 0, 0),
			flex: 1,
		},
	},
	second: {
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 0, 2),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 2, 0, 0),
			maxWidth: '50% !important',
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 0, 0),
			padding: theme.spacing(0, 1, 0),
			maxWidth: '100%',
			flex: 1,
		},
	},
	third: {
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 0, 1),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 0, 0, 1),
			maxWidth: '50% !important',
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(0, 0, 0, 1),
			maxWidth: '100%',
			flex: 1,
		},
	},
}));

const ArticleSection = (props: any) => {
	const classes = useStyles();
	const { name = '', id = '', articles = [] } = props;
	const [first, second, third] = articles;

	return (
		<>
			<Title title={name} id={id} />
			<Box
				display={'flex'}
				flexDirection={'row'}
				flexWrap={'wrap'}
				className={classes.root}>
				<Grid className={classes.first}>
					<ArticleCardShortImage title={first.title} description={first.description} id={first.id} image={first.image} />
				</Grid>
				<Grid className={classes.second}>
					<ArticleCardShortImage title={second.title} description={second.description} id={second.id} image={second.image} />
				</Grid>
				<Grid className={classes.third}>
					<ArticleCardShortImage title={third.title} description={third.description} id={third.id} image={third.image} />
				</Grid>
			</Box>
		</>
	);
};

export default ArticleSection;
