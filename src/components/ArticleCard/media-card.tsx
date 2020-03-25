import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => createStyles({
	root: {
		maxWidth: '100%',
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

const MediaCard = (props: any) => {
	const classes = useStyles();
	const {
		image = '', title = '', description = '',
	} = props;

	return (
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
	);
};

export default MediaCard;
