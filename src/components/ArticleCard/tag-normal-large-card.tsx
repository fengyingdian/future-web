/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link, Box,
} from '@material-ui/core';
import { TagLarge } from './tag';
import useCommonStyles from '../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
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
		width: '50%',
		height: 0,
		paddingTop: '25%',
	},
	infoBox: {
		flex: 1,
		margin: theme.spacing(0, 0, 0, 3),
	},
	title: {
		fontSize: 36,
		fontWeight: 900,
		lineHeight: 1.5,
		color: '#000',
		height: '108px',
		padding: theme.spacing(0),
	},
	excerpt: {
		fontSize: 24,
		lineHeight: 1.5,
		height: '72px',
		color: '#999',
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
		} = {}, title = '', excerpt = '', id = '', tags = [''],
	} = props;
	const [tag] = tags;

	return (
		<Link href={`/articles?id=${id}`} underline={'none'}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.image}
					image={url}
					title={title}
				/>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
					alignItems={'flex-start'}
					flexWrap={'nowrap'}
					className={classes.infoBox}>
					{tag && (<TagLarge tag={tag} />)}
					<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
						{title}
					</Typography>
					<Typography id={'excerpt'} className={`${classes.excerpt} ${overflowLine2}`}>
						{excerpt}
					</Typography>
				</Box>
			</Card>
		</Link>
	);
};

export default ArticleCard;
