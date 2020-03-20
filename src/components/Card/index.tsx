import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		margin: theme.spacing(0, 2, 3),
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

const MyCard = (props: any) => {
	const classes = useStyles();
	const { image = '' } = props;

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label={'recipe'} className={classes.avatar}>
						{'R'}
					</Avatar>
				}
				title={'Shrimp and Chorizo Paella'}
				subheader={'September 14, 2016'}
			/>
			<CardMedia
				className={classes.media}
				image={image}
				title={'Paella dish'}
			/>
			<CardContent>
				<Typography variant={'body2'} color={'textSecondary'} component={'p'}>
					{'This impressive paella is a perfect party dish and a fun meal to cook together with your'}
					{'guests. Add 1 cup of frozen peas along with the mussels, if you like.'}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MyCard;
