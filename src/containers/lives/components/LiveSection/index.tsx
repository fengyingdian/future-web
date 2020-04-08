/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
	Box, Container, Typography, CardMedia,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { liveBkCover } from '../../../../constants/index';

declare const Aliplayer: any;


const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		margin: theme.spacing(0, 0, 2),
		padding: theme.spacing(2),
		background: '#fff',
	},
	vedioBox: {
		width: '100%',
		height: 0,
		paddingTop: '60%',
		position: 'relative',
		top: 0,
		left: 0,
	},
	vedio: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	title: {
		fontSize: 26,
		lineHeight: '40px',
		color: '#131313',
		margin: theme.spacing(2, 0, 0.25),
	},
	description: {
		fontSize: 18,
		lineHeight: '32px',
		color: '#666',
		fontFamily: 'fangzheng-light',
	},
}));

const LiveSection = (props: any) => {
	const classes = useStyles();
	const { stream = {} } = props;
	const {
		status = 'publish_done',
		title = '',
		description = '',
		play: {
			lsd: {
				rtmp = '',
				// m3u8 = '',
			} = {},
		} = {},
	} = stream;

	useEffect(() => {
		if (Aliplayer) {
			const player = new Aliplayer({
				id: 'J_prismPlayer',
				width: '100%',
				autoplay: true,
				isLive: true,
				// source: sp === 'm3u8' ? m3u8 : rtmp,
				source: 'https://video1.flipboard.cn/prod/1586278173_lsd.m3u8?auth_key=1586335433-0-0-49a61bf8b124daec59accc23d6a54f27',
			}, (() => {
				console.log('player loaded', player);
			}));
		}
	});

	console.log({ rtmp });

	return (
		<Container maxWidth={false} className={classes.root}>
			<Box
				display={'flex'}
				flexDirection={'clomun'}
				alignItems={'center'}
				justifyContent={'center'}
				flexWrap={'wrap'}
				className={classes.vedioBox}>
				<div
					className={`${classes.vedio} prism-player`}
					id={'J_prismPlayer'}
					style={{
						height: '100%',
						display: status === 'publish_done' ? 'none' : '',
					}} />
				{status === 'publish_done' && (
					<CardMedia
						className={classes.vedio}
						style={{
							height: '100%',
						}}
						image={liveBkCover} />
				)}
			</Box>
			<Typography className={classes.title}>
				{title}
			</Typography>
			<Typography className={classes.description}>
				{description}
			</Typography>
		</Container>
	);
};

export default LiveSection;
