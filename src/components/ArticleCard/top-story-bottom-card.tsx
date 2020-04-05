/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link, Box,
} from '@material-ui/core';
import moment from 'moment';
import { TagLarge } from './tag';
import useCommonStyles from '../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		height: '292px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'space-between',
		margin: theme.spacing(3, 0),
		padding: theme.spacing(3),
		borderTop: '4px solid rgb(167, 56, 52)',
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
	},
	image: {
		width: '50%',
		height: '240px',
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
		fontWeight: 900,
		lineHeight: 1.5,
		color: '#000',
		padding: theme.spacing(0),
	},
	excerpt: {
		fontSize: 16,
		lineHeight: 1.5,
		color: '#898989',
		margin: theme.spacing(2, 0, 0),
	},
	publisher: {
		fontSize: 12,
		lineHeight: 1.5,
		color: '#000',
		margin: theme.spacing(2, 0, 0),
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
		cover: {
			url = '',
		} = {}, title = '', excerpt = '', id = '', tags = [''], categoryName = '', date = '', publisherName = '',
	} = props;
	const [tag] = tags.length > 0 ? tags : [categoryName];
	const time = moment(date).format('YYYY/MM/DD HH:mm:ss');

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
						{tag && (<TagLarge tag={tag} />)}
					</div>
					<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
						{title}
					</Typography>
					<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
						{excerpt}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
				    {`${publisherName} · ${time}`}
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
