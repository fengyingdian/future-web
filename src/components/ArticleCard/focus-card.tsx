/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Card, CardMedia, Link, Box,
} from '@material-ui/core';
import moment from 'moment';
import { prop } from 'ramda';
import { TagFocus } from './tag';
import useCommonStyles from '../../theme/styles';
import { defaultCoverImage } from '../../constants/index';

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
		height: 105,
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
		width: 73,
		height: 73,
		background: '#f8f8f8',
	},
	infoBox: {
		flex: 1,
		margin: theme.spacing(0, 0, 0, 2),
	},
	title: {
		flex: 1,
		fontSize: 13,
		lineHeight: '20px',
		color: 'rgb(102, 102, 102)',
		padding: '6px 0 4px',
	},
	publisher: {
		fontSize: 10,
		lineHeight: 1.5,
		margin: theme.spacing(0, 0, -0.5),
		color: 'rgb(163, 9, 10)',
		fontFamily: 'fangzheng-medium',
	},
}));

const ArticleCard = (props: any) => {
	const classes = useStyles();
	const {
		overflowLine1, overflowLine2,
	} = useCommonStyles();

	const {
		tags = [], cover = null, title = '', id = '', categoryName = '', date = '', publisherName = '',
	} = props;

	const url = prop('url', cover);

	const [tag] = tags.length > 0 ? tags : [categoryName];
	const time = moment(date).format('YYYY/MM/DD');

	return (
		<Link href={`/articles?category=${categoryName}&id=${id}`} underline={'none'} style={{ width: '100%' }}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.image}
					image={defaultCoverImage}
					data-src={url}
					data-lazyload
					title={'article-cover'}
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
