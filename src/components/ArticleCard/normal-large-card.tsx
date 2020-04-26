/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link, Box,
} from '@material-ui/core';
import moment from 'moment';
import { prop } from 'ramda';
import { TagLarge } from './tag';
import useCommonStyles from '../../theme/styles';
import { largeCardCover, defaultCoverImage } from '../../constants/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: theme.spacing(0),
		transition: '0.3s',
		boxShadow: '0 0 0',
		border: 0,
		borderRadius: 0,
		background: '#fff',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			padding: theme.spacing(2),
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			padding: theme.spacing(2),
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
		},
		[theme.breakpoints.up(800)]: {
		  padding: theme.spacing(3),
		},
	},
	image: {
		width: '100%',
		height: 0,
		background: '#f8f8f8',
		paddingTop: '56%',
		[theme.breakpoints.up('sm')]: {
			width: '50%',
			height: 320,
			paddingTop: 0,
		},
	},
	infoBox: {
		flex: 1,
		margin: theme.spacing(0),
		position: 'relative',
		top: 0,
		left: 0,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			margin: theme.spacing(0),
		},
		[theme.breakpoints.up('sm')]: {
			height: 320,
			margin: theme.spacing(0, 0, 0, 2),
		},
		[theme.breakpoints.up(800)]: {
		  margin: theme.spacing(0, 0, 0, 3),
		},
	},
	tag: {
		width: '100%',
		margin: theme.spacing(1.8, 0, 0),
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(-0.5, 0, 0),
			position: 'absolute',
			top: 0,
			left: 0,
		},
	},
	title: {
		fontSize: 16,
		lineHeight: 1.5,
		color: 'rgb(163, 9, 10)',
		padding: theme.spacing(0),
		[theme.breakpoints.up('sm')]: {
			fontSize: 26,
		},
	},
	excerpt: {
		fontSize: 12,
		lineHeight: 1.5,
		color: 'rgb(102, 102, 102)',
		margin: theme.spacing(1, 0, 0),
		fontFamily: 'fangzheng-light',
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
			margin: theme.spacing(1.5, 0, 0),
		},
	},
	publisher: {
		fontSize: 10,
		lineHeight: 1.5,
		color: 'rgb(163, 9, 10)',
		margin: theme.spacing(2, 0, -0.5),
		fontFamily: 'fangzheng-medium',
		[theme.breakpoints.up('sm')]: {
			fontSize: 12,
			position: 'absolute',
			bottom: 0,
			left: 0,
		},
	},
}));

const ArticleCard = (props: any) => {
	const classes = useStyles();
	const {
		overflowLine1, overflowLine3,
	} = useCommonStyles();

	const {
		cover = null, title = '', excerpt = '', id = '', tags = [''], categoryName = '', date = '', publisherName = '',
	} = props;

	const url = prop('url', cover);

	const [tag] = tags.length > 0 ? tags : [categoryName];
	const time = moment(date).format('YYYY/MM/DD');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.image}
					image={defaultCoverImage}
					data-src={url || largeCardCover}
					data-lazyload
					title={'article-cover'}
				/>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'flex-start'}
					flexWrap={'nowrap'}
					className={classes.infoBox}>
					<div className={classes.tag}>
					  {tag && (<TagLarge tag={tag} />)}
					</div>
					<Typography id={'title'} className={`${classes.title} ${overflowLine3}`}>
						{title}
					</Typography>
					<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine3}`}>
						{excerpt}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
						<span style={{ fontFamily: 'fangzheng-bold' }}>
							{publisherName}
						</span>
						{'·'}
						{time}
					</Typography>
				</Box>
			</Card>
		</Link>
	);
};

export default ArticleCard;
