/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link,
} from '@material-ui/core';
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
			background: '#121212',
			boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
			'& #title': {
				color: '#fff',
			},
			'& #excerpt': {
				color: '#e8e8e8',
			},
		},
	},
	image: {
		height: 0,
		paddingTop: '67%',
		background: '#f8f8f8',
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
}));

export const ArticleCardShortImage = (props: any) => {
	const classes = useStyles();
	const {
		overflowLine2,
	} = useCommonStyles({ line: 2 });

	const {
		image = '', title = '', excerpt = '', id = '', tags = [''],
	} = props;
	const [tag] = tags;

	return (
		<Link href={`/articles?id=${id}`} underline={'none'}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.image}
					image={image}
					title={'Paella dish'}
				/>
				{tag && (<Tag tag={tag} />)}
				<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
					{title}
				</Typography>
				<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
					{excerpt}
				</Typography>
			</Card>
		</Link>
	);
};
