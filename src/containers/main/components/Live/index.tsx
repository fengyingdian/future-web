import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Link, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		borderTop: '10px solid #000',
		margin: theme.spacing(0, 0, 2),
		padding: theme.spacing(4),
		background: '#fff',
	},
	tipsBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: theme.spacing(0, 0, 4),
	},
	tipsIcon: {
		borderRadius: '50%',
		background: '#f52828',
		width: '16px',
		height: '16px',
		margin: theme.spacing(0, 2, 0, 0),
	},
	tipsContent: {
		fontSize: 32,
		fontWeight: 900,
		color: '#000',
	},
	infoBox: {
		borderTop: '1px solid #e8e8e8',
		borderBottom: '1px solid #e8e8e8',
		padding: theme.spacing(3, 0),
	},
	infoHost: {
		fontSize: 20,
		fontWeight: 300,
		color: '#000',
	},
	infoTitle: {
		fontSize: 20,
		fontWeight: 900,
		color: '#000',
	},
}));

const Live = (props: any) => {
	const classes = useStyles();
	const {
		host = '蔚来汽车', title = '北京NIO Day 发布会',
	} = props;

	return (
		<Link href={'/lives'} className={classes.root}>
			<div>
				<div className={classes.tipsBox}>
					<div className={classes.tipsIcon} />
					<Typography className={classes.tipsContent}>
						{'直播中'}
					</Typography>
				</div>
				<div className={classes.infoBox}>
					<Typography className={classes.infoHost}>
						{host}
					</Typography>
					<Typography className={classes.infoTitle}>
						{title}
					</Typography>
				</div>
			</div>
		</Link>
	);
};

export default Live;
