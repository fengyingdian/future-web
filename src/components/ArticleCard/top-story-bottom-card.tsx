/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link, Box,
} from '@material-ui/core';
import moment from 'moment';
import { prop } from 'ramda';
import { TagTopStory } from './tag';
import useCommonStyles from '../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		height: 273,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'space-between',
		margin: theme.spacing(2, 0, 0),
		padding: theme.spacing(3),
		borderTop: '4px solid rgb( 206, 65, 39)',
		transition: '0.3s',
		boxShadow: '0 0 0',
		border: 0,
		borderRadius: 0,
		background: '#fff',
		'&:hover': {
			transform: 'translateY(-3px)',
			background: '#e8e8e8',
			// boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
			'& #title': {
				// color: '#fff',
			},
			'& #excerpt': {
				// color: '#e8e8e8',
			},
		},
		[theme.breakpoints.down(800)]: {
			display: 'none',
		},
	},
	image: {
		width: '38%',
		height: 222,
	},
	infoBox: {
		flex: 1,
		margin: theme.spacing(0, 3, 0, 0),
		position: 'relative',
		top: 0,
		left: 0,
	},
	tag: {
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	title: {
		fontSize: 26,
		lineHeight: 1.5,
		color: '#131313',
		padding: theme.spacing(0),
	},
	excerpt: {
		fontSize: 16,
		lineHeight: 1.5,
		color: '#666',
		margin: theme.spacing(2, 0, 0),
		fontFamily: 'fangzheng-light',
	},
	publisher: {
		fontSize: 12,
		lineHeight: 1.5,
		color: '#131313',
		margin: theme.spacing(2, 0, 0),
		fontFamily: 'fangzheng-medium',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
}));

const ArticleCard = (props: any) => {
	const classes = useStyles();
	// const {
	// 	overflowLine1,
	// } = useCommonStyles();
	const {
		overflowLine1, overflowLine2,
	} = useCommonStyles();

	const {
		cover = null, tags, title = '', excerpt = '', id = '', categoryName = '', date = '', publisherName = '',
	} = props;

	const url = prop('url', cover);

	const tag = tags.length > 0 ? tags : [categoryName];
	const time = moment(date).format('YYYY/MM/DD');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
			<Card className={classes.root}>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'flex-start'}
					flexWrap={'nowrap'}
					className={classes.infoBox}>
					<div className={classes.tag}>
						{tag && (<TagTopStory tag={tag} />)}
					</div>
					<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
						{title}
					</Typography>
					<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
						{excerpt}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
				    {`${publisherName}·${time}`}
					</Typography>
				</Box>
				<CardMedia
					className={classes.image}
					image={url}
					title={title} />
			</Card>
		</Link>
	);
};

export default ArticleCard;
