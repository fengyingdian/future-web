import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Link, CardMedia, Typography, Box,
} from '@material-ui/core';
import { TopStoryTag } from './tag';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		padding: theme.spacing(3),
		background: '#fff',
		borderTop: '10px solid #000',
		borderRadius: 0,
		border: '',
	},
	media: {
		height: 0,
		paddingTop: '40%',
		background: '#e8e8e8',
	},
	title: {
		fontSize: 28,
		fontWeight: 900,
		lineHeight: 1.5,
		height: '84px',
		color: '#000',
	},
	description: {
		fontSize: 18,
		lineHeight: 1.5,
		margin: theme.spacing(2, 0, 0),
		height: '60px',
		color: '#999',
	},
	info: {
		fontSize: 14,
		margin: theme.spacing(2, 0, 0),
		color: '#666',
	},
	textLineClamp: {
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitLineClamp: 2,
	},
}));

const TopStoryCard = (props: any) => {
	const classes = useStyles();
	const {
		image = '',
		tag = '农业',
		title = '荆楚大地农事忙啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
		description = '本报武汉3月22日电 （记者贺广华、范昊天）满目春茶，层层叠叠。今年开春气温升得快，湖北省五峰土家族自',
		id = '',
		host = '人民日报',
		time = '2020/03/23',
	} = props;

	return (
		<Link href={`/articles?id=${id}`}>
			<Box className={classes.root}>
				<CardMedia
					className={classes.media}
					image={image}
					title={'Contemplative Reptile'}
				/>
				<TopStoryTag tag={tag} />
				<Typography className={classes.title}>
					{title}
				</Typography>
				<Typography className={classes.description}>
					{description}
				</Typography>
				<Typography className={classes.info}>
					{`${host}·${time}`}
				</Typography>
			</Box>
		</Link>
	);
};

export default TopStoryCard;
