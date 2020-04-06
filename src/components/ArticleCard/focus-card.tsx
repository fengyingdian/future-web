/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link, Box,
} from '@material-ui/core';
import moment from 'moment';
import { TagFocus } from './tag';
import useCommonStyles from '../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'space-between',
		width: '100%',
		padding: theme.spacing(2, 0),
		transition: '0.3s',
		boxShadow: '0 0 0',
		border: 0,
		borderRadius: 0,
		background: '#fff',
		// '&:hover': {
		// 	background: '#e8e8e8',
		// 	// boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
		// 	'& #title': {
		// 		// color: '#fff',
		// 	},
		// 	'& #excerpt': {
		// 		// color: '#e8e8e8',
		// 	},
		// },
	},
	image: {
		width: '74px',
		height: '74px',
	},
	infoBox: {
		flex: 1,
		margin: theme.spacing(0, 0, 0, 2),
	},
	title: {
		flex: 1,
		fontSize: 13,

		color: '#000',
		padding: '6px 0 4px',
		fontFamily: 'notoserifcjksc-bold',
	},
	publisher: {
		fontSize: 10,
		lineHeight: 1.5,
		color: '#000',
		fontFamily: 'notoserifcjksc-medium',
	},
}));

const ArticleCard = (props: any) => {
	const classes = useStyles();
	const {
		overflowLine1, overflowLine2,
	} = useCommonStyles();

	const {
		cover: {
			url = '',
		} = {}, title = '', id = '', categoryName = '', date = '', publisherName = '',
	} = props;
	// const [tag] = tags.length > 0 ? tags : [categoryName];
	const tag = '要闻';
	const time = moment(date).format('YYYY/MM/DD HH:mm:ss');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'} style={{ width: '100%' }}>
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
					{tag && (<TagFocus tag={tag} />)}
					<Typography id={'title'} className={`${classes.title} ${overflowLine2}`}>
						{title}
					</Typography>
					<Typography className={`${classes.publisher} ${overflowLine1}`}>
				    {`${publisherName} · ${time}`}
					</Typography>
				</Box>
			</Card>
		</Link>
	);
};

export default ArticleCard;
