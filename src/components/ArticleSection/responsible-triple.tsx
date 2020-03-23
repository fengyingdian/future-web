import React from 'react';
import {
	Grid, Box,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ArticleCardLargeImage, ArticleCardShortImage, ArticleCardLongImage } from '../ArticleCard';
import Title from './title';

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
	const { title = '' } = props;

	return (
		<>
			<Title title={title} />
			<Box
				display={'flex'}
				flexDirection={'row'}
				flexWrap={'wrap'}
				className={classes.root}>
				<Grid className={classes.first}>
			    <ArticleCardLargeImage image={'http://back.rmsznet.com/upload/202003/09/202003090936244375.png'} />
				</Grid>
				<Grid className={classes.second}>
					<ArticleCardShortImage image={'http://back.rmsznet.com/upload/202003/19/202003191021510185.jpg'} />
				</Grid>
				<Grid className={classes.third}>
					<ArticleCardLongImage image={'http://back.rmsznet.com/upload/202003/20/202003201015164375.jpg'} />
				</Grid>
			</Box>
		</>
	);
};

export default ArticleSection;
