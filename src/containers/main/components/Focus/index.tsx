import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Typography, CardMedia, Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		borderTop: '10px solid #000',
		margin: theme.spacing(2, 0, 2),
		padding: theme.spacing(2, 3, 2),
		background: '#fff',
	},
	title: {
	  fontSize: 32,
		fontWeight: 900,
	},
	articleBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: theme.spacing(2, 0),
		borderBottom: '1px solid #e8e8e',
	},
	articleImage: {
		minWidth: '100px',
		height: '100px',
		background: '#e8e8e8',
	},
	articleInfo: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: theme.spacing(0, 0, 0, 2),
	},
	articleTag: {
		fontSize: 14,
		fontWeight: 900,
		color: '#f52828',
	},
	articleTitle: {
		fontSize: 16,
		fontWeight: 900,
		lineHeight: 1.5,
		margin: theme.spacing(1, 0),
		height: '48px',
		color: '#000',
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitLineClamp: 2,
	},
	articleDesc: {
   	display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		fontSize: 14,
		color: '#999',
	},
}));

const Focus = (props: any) => {
	const classes = useStyles();
	const {
		title: sectionTitle = '聚焦',
		articles = [
			{
				tag: '经济',
				title: '中国经济供需循环愈加畅通中国经济供需循环',
				image: '',
				host: '中国新闻报',
				time: '10小时前',
			},
			{
				tag: '经济',
				title: '中国经济供需循环',
				image: '',
				host: '中国新闻报',
				time: '10小时前',
			},
			{
				tag: '经济',
				title: '中国经济供需循环愈加畅通中国经济供需循环',
				image: '',
				host: '中国新闻报',
				time: '10小时前',
			},
		],
	} = props;

	return (
		<div className={classes.root}>
			<Typography className={classes.title}>
				{sectionTitle}
			</Typography>
			{articles.map(({
				tag, title, image, host, time,
			}: any) => (
				<div className={classes.articleBox}>
					<CardMedia
						className={classes.articleImage}
						    image={image}
						title={'Contemplative Reptile'} />
					<Box className={classes.articleInfo}>
						<Typography className={classes.articleTag}>
							{tag}
						</Typography>
						<Typography className={classes.articleTitle}>
							{title}
						</Typography>
						<Typography className={classes.articleDesc}>
							{`${host}·${time}`}
						</Typography>
					</Box>
				</div>
			))}
		</div>
	);
};

export default Focus;
