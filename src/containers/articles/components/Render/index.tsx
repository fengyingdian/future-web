import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import moment from 'moment';
import ArticleContent from './content';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		background: 'rgb(246, 239, 235)',
		boxSizing: 'border-box',
		padding: theme.spacing(2, 4),
	},
	tag: {
		fontSize: 16,
		fontWeight: 900,
		margin: theme.spacing(2, 1, 0, 0),
		color: 'rgb(207, 92, 67)',
	},
	title: {
		fontSize: 28,
		fontWeight: 900,
		margin: theme.spacing(2, 0),
		color: '#000',
	},
	subtitle: {
		fontSize: 16,
		margin: theme.spacing(2, 0),
		color: '#111',
	},
	cover: {
		margin: theme.spacing(4, 6),
		height: 0,
		paddingTop: '40%',
	},
	content: {
		margin: theme.spacing(4, 0),
	},
}));

const ArticleRender = (props: any) => {
	const classes = useStyles();

	const {
		tags = [],
		title = '',
		contents = [],
		publisherName = '',
		date = '',
		// cover: {
		// 	url = '',
		// } = {},
	} = props;
	const time = moment(date).format('YYYY/MM/DD HH:mm:ss');

	return (
		<div className={classes.root}>
			<Box display={'flex'} flexDirection={'row'}>
				{tags.map((tag: string) => (
					<Typography className={classes.tag}>
						{tag}
					</Typography>
				))}
			</Box>
			<Typography className={classes.title}>
				{title}
			</Typography>
			<Typography className={classes.subtitle}>
				{`${publisherName} · ${time}`}
			</Typography>
			{/* <CardMedia
				className={classes.cover}
				image={url}
				title={title} /> */}
			<div className={classes.content}>
		  	<ArticleContent contents={contents} />
			</div>
		</div>
	);
};

export default ArticleRender;
