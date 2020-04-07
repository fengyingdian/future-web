import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, Container } from '@material-ui/core';
import moment from 'moment';
import ArticleContent from './content';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		background: '#fff',
		boxSizing: 'border-box',
		padding: theme.spacing(0, 6.5),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	tag: {
		fontSize: 16,

		margin: theme.spacing(4.25, 1, 0, 0),
		color: 'rgb(167, 56, 52)',
	},
	title: {
		fontSize: 26,
		lineHeight: '32px',
		margin: theme.spacing(3, 0, 0),
		color: '#131313',
	},
	subtitle: {
		fontSize: 12,
		width: '100%',
		margin: theme.spacing(3, 0, 0),
		borderBottom: '1px solid #eee',
		color: '#131313',
		fontFamily: 'fangzheng-medium',
	},
	cover: {
		margin: theme.spacing(4, 6),
		height: 0,
		paddingTop: '40%',
	},
	content: {
		margin: theme.spacing(4, 0),
		maxWidth: theme.breakpoints.width('sm'),
	},
}));

const ArticleRender = (props: any) => {
	const classes = useStyles();

	const {
		title = '',
		contents = [],
		publisherName = '',
		date = '',
		categoryName = '',
		tags = [],
		// cover: {
		// 	url = '',
		// } = {},
	} = props;
	const labels = tags.length > 0 ? tags : [categoryName];
	const time = moment(date).format('YYYY/MM/DD');

	return (
		<Container
			maxWidth={false}
			className={classes.root}>
			<Box
				display={'flex'}
				flexDirection={'row'}>
				{labels.map((tag: string, index: number) => (
					<Typography key={index} className={classes.tag}>
						{tag}
					</Typography>
				))}
			</Box>
			<Typography className={classes.title}>
				{title}
			</Typography>
			<Typography className={classes.subtitle}>
				{`${publisherName}·${time}`}
			</Typography>
			{/* <CardMedia
				className={classes.cover}
				image={url}
				title={title} /> */}
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyItems={'flex-start'}
				alignItems={'center'}
				alignSelf={'center'}
				className={classes.content}>
		  	<ArticleContent contents={contents} />
			</Box>
		</Container>
	);
};

export default ArticleRender;
