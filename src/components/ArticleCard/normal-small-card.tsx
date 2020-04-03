/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link,
} from '@material-ui/core';
import moment from 'moment';
import { Tag } from './tag';
import useCommonStyles from '../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		margin: theme.spacing(0, 0, 0),
		padding: theme.spacing(3),
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
		height: 0,
		paddingTop: '67%',
	},
	title: {
		fontSize: 18,
		fontWeight: 900,
		lineHeight: 1.5,
		color: '#000',
		height: '52px',
		padding: theme.spacing(0),
	},
	excerpt: {
		fontSize: 16,
		lineHeight: 1.5,
		height: '48px',
		color: '#999',
		margin: theme.spacing(2, 0, 0),
	},
	publisher: {
		fontSize: 16,
		lineHeight: 1.5,
		color: '#666',
		margin: theme.spacing(2, 0, 0),
	},
}));

const ArticleCard = (props: any) => {
	const classes = useStyles();
	const {
		overflowLine2,
	} = useCommonStyles({ line: 2 });

	const {
		cover: {
			url = '',
		} = {}, title = '', excerpt = '', id = '', tags = [''], categoryName = '', date = '', publisherName = '',
	} = props;
	const [tag] = tags;
	const time = moment(date).format('YYYY/MM/DD HH:mm:ss');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'}>
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
				<Typography className={classes.publisher}>
					{`${publisherName} · ${time}`}
				</Typography>
			</Card>
		</Link>
	);
};

export default ArticleCard;
