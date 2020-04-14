/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Box, CardMedia, Link,
} from '@material-ui/core';
import moment from 'moment';
import { prop } from 'ramda';
import { TagNoCover } from './tag';
import useCommonStyles from '../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		margin: theme.spacing(0),
		padding: theme.spacing(0, 3, 3),
		boxSizing: 'border-box',
		transition: '0.3s',
		boxShadow: '0 0 0',
		border: 0,
		borderRadius: 0,
		background: '#fff',
		minHeight: 400,
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
			padding: theme.spacing(0, 2, 2),
		},
		[theme.breakpoints.up(800)]: {
			padding: theme.spacing(0, 3, 3),
		},
	},
	image: {
		width: '100%',
		height: 0,
		[theme.breakpoints.down(800)]: {
			paddingTop: '40%',
			margin: theme.spacing(2, 0, 0),
		},
		[theme.breakpoints.up(800)]: {
			paddingTop: '40%',
			margin: theme.spacing(3, 0, 0),
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: '64%',
		},
	},
	contentBox: {
		flex: 1,
		width: '100%',
		height: '100%',
		minHeight: 200,
		position: 'relative',
		top: 0,
		left: 0,
		[theme.breakpoints.down(800)]: {
			margin: theme.spacing(2, 0, 0),
		},
		[theme.breakpoints.up(800)]: {
			margin: theme.spacing(3, 0, 0),
		},
	},
	tag: {
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	title: {
		fontSize: 18,
		lineHeight: 1.5,
		color: '#131313',
		margin: theme.spacing(0),
	},
	excerpt: {
		fontSize: 14,
		lineHeight: 1.5,
		color: '#666',
		margin: theme.spacing(2, 0, 0),
		fontFamily: 'fangzheng-light',
	},
	publisher: {
		fontSize: 12,
		lineHeight: 1.5,
		color: '#131313',
		margin: theme.spacing(0),
		fontFamily: 'fangzheng-medium',
		position: 'absolute',
		left: 0,
		bottom: 0,
	},
}));

const ArticleCard = (props: any) => {
	const classes = useStyles();

	const {
		overflowLine1, overflowLine2, overflowLine4,
	} = useCommonStyles();

	const {
		cover = null, title = '', excerpt = '', id = '', tags = [''], categoryName = '', date = '', publisherName = '',
	} = props;

	const url = prop('url', cover);

	const [tag] = tags.length > 0 ? tags : [categoryName];
	const time = moment(date).format('YYYY/MM/DD');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'flex-start'}
				className={classes.root}
				style={{
					height: '100%',
				}}>
				{url && (
					<CardMedia
						className={classes.image}
						image={url}
						title={title}
					/>
				)}
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'flex-start'}
					className={classes.contentBox}
					style={{
						height: '100%',
					}}>
					<div className={classes.tag}>
						{tag && (<TagNoCover tag={tag} />)}
					</div>
					<Typography id={'title'} className={`${classes.title} ${url ? overflowLine2 : overflowLine4}`}>
						{title}
					</Typography>
					<Typography id={'excerpt'} className={`${classes.excerpt} ${url ? overflowLine2 : overflowLine4}`}>
						{excerpt}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
						{`${publisherName}·${time}`}
					</Typography>
				</Box>
			</Box>
		</Link>
	);
};

export default ArticleCard;
