import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
	Link, Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import Theme from '../../theme/theme';

const useStyles = makeStyles(() => createStyles({
	root: {
		maxWidth: '100%',
		margin: Theme.spacing(2, 0, 1),
	},
	media: {
		height: 0,
		paddingTop: 200,
	},
	description: {
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		wordBreak: 'break-word',
		whiteSpace: 'pre-line',
		WebkitLineClamp: 3,
		// margin: theme.spacing(0, 0, 0),
		// padding: theme.spacing(1, 2, 4),
	},
}));

const LiveCard = (props: any) => {
	const classes = useStyles();
	const {
		image = '', title = '', description = '', id = '',
	} = props;

	return (
		<Link href={`/articles?id=${id}`}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={image}
						title={'Contemplative Reptile'}
					/>
					<CardContent>
						<Typography gutterBottom variant={'h5'} component={'h2'}>
							{title}
						</Typography>
						<Typography className={classes.description} variant={'body2'} color={'textSecondary'} component={'p'}>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};

export default LiveCard;
