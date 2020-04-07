/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link,
} from '@material-ui/core';
import moment from 'moment';
import { prop } from 'ramda';
import { Tag, TagNoCover } from './tag';
import useCommonStyles from '../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		margin: theme.spacing(0),
		padding: theme.spacing(3),
		boxSizing: 'border-box',
		transition: '0.3s',
		boxShadow: '0 0 0',
		border: 0,
		borderRadius: 0,
		background: '#fff',
		// display: 'flex',
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'flex-start',
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
		height: 0,
		paddingTop: '56%',
	},
	title: {
		fontSize: 18,
		lineHeight: 1.5,
		color: '#000',
		height: '54px',
		margin: theme.spacing(2, 0, 0),
	},
	excerpt: {
		fontSize: 14,
		lineHeight: 1.5,
		height: '42px',
		color: '#898989',
		margin: theme.spacing(2, 0, 0),
		fontFamily: 'fangzheng-light',
	},
	publisher: {
		fontSize: 12,
		lineHeight: 1.5,
		color: '#000',
		margin: theme.spacing(2, 0, 0),
		fontFamily: 'fangzheng-medium',
	},
}));

const useExtraStyles = makeStyles(() => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: '100%',
		height: '100%',
		minHeight: 320,
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
	publisher: {
		position: 'absolute',
		left: 0,
		bottom: 0,
	},
}));

const ArticleCard = (props: any) => {
	const classes = useStyles();
	const extraClasses = useExtraStyles();

	const {
		overflowLine1, overflowLine2,
	} = useCommonStyles({ line: 2 });

	const {
		cover = null, title = '', excerpt = '', id = '', tags = [''], categoryName = '', date = '', publisherName = '',
	} = props;

	const url = prop('url', cover);

	const [tag] = tags.length > 0 ? tags : [categoryName];
	const time = moment(date).format('YYYY/MM/DD');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
			{url && (
				<Card className={classes.root}>
					<CardMedia
						className={classes.image}
						image={url}
						title={title}
					/>
					{tag && (<Tag tag={tag} />)}
					<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
						{title}
					</Typography>
					<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
						{excerpt}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
						{`${publisherName}·${time}`}
					</Typography>
				</Card>
			)}
			{!url && (
				<div
					className={classes.root}
					style={{
						height: '100%',
					}}>
					<div className={extraClasses.root}>
						<div className={extraClasses.tag}>
							{tag && (<TagNoCover tag={tag} />)}
						</div>
						<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
							{title}
						</Typography>
						<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
							{excerpt}
						</Typography>
						<Typography className={`${classes.publisher} ${overflowLine1} ${extraClasses.publisher}`}>
							{`${publisherName}·${time}`}
						</Typography>
					</div>
				</div>
			)}
		</Link>
	);
};

export default ArticleCard;
