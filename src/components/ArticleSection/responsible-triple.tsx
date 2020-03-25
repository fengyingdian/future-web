/* eslint-disable max-len */
import React from 'react';
import {
	Grid, Box,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ArticleCardLargeImage, ArticleCardShortImage, ArticleCardLongImage } from '../ArticleCard';
import Title from './title';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		maxWidth: '100%',
		margin: theme.spacing(2, 0, 2),
	},
	first: {
		maxWidth: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			margin: theme.spacing(0, 0, 0),
		  padding: theme.spacing(0, 0, 2),
			borderBottom: '1px solid #e5e5e5',
		},
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(0, 0, 4),
			padding: theme.spacing(0, 0, 4),
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 0, 0),
			padding: theme.spacing(0, 2, 0, 0),
			maxWidth: '50% !important',
			borderRight: '1px solid #e5e5e5',
			borderBottom: '0',
		},
	},
	second: {
		maxWidth: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 0, 2),
			borderBottom: '1px solid #e5e5e5',
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 2, 0, 0),
			maxWidth: '50% !important',
			borderRight: '1px solid #e5e5e5',
			borderBottom: '0',
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 0, 0),
			padding: theme.spacing(0, 2, 0),
			maxWidth: '25% !important',
			borderRight: '1px solid #e5e5e5',
			borderBottom: '0',
		},
	},
	third: {
		maxWidth: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 0, 2),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 0, 0, 2),
			maxWidth: '50% !important',
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(0, 0, 0, 2),
			maxWidth: '25% !important',
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
					<ArticleCardLargeImage title={first.title} description={first.description} id={first.id} image={first.image} />
				</Grid>
				<Grid className={classes.second}>
					<ArticleCardShortImage title={second.title} description={second.description} id={second.id} image={second.image} />
				</Grid>
				<Grid className={classes.third}>
					<ArticleCardLongImage title={third.title} description={third.description} id={third.id} image={third.image} />
				</Grid>
			</Box>
		</>
	);
};

export default ArticleSection;