import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Link, Typography,
} from '@material-ui/core';
import useCommonStyles from '../../../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		borderTop: '4px solid rgb(167, 56, 52)',
		margin: theme.spacing(0, 0, 2),
		padding: theme.spacing(5.5, 5.5),
		background: '#fff',
		transition: 'all .3s',
		'&:hover': {
			transform: 'translateY(-3px)',
			// boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
			'& #content': {
				color: 'rgb(167, 56, 52)',
			},
			'& #excerpt': {
				// color: '#e8e8e8',
			},
		},
	},
	tipsBox: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: theme.spacing(0, 0, 2),
	},
	tipsIcon: {
		borderRadius: '50%',
		background: 'rgb(167, 56, 52)',
		width: '12px',
		minWidth: '12px',
		height: '12px',
		margin: theme.spacing(0, 1.5, 0, 0),
	},
	tipsContent: {
		fontSize: 32,
		color: '#000',
	},
	infoBox: {
		width: '100%',
		borderTop: '1px solid #e8e8e8',
		borderBottom: '1px solid #e8e8e8',
		padding: theme.spacing(3.5, 0),
	},
	infoHost: {
		fontSize: 24,
		fontWeight: 200,
		lineHeight: '36px',
		color: '#000',
		fontFamily: 'notoserifcjksc-extralight',
	},
	infoTitle: {
		fontSize: 24,
		color: '#000',
	},
}));

const Live = (props: any) => {
	const classes = useStyles();
	const {
		host = '蔚来汽车', title = '北京NIO Day 发布会',
	} = props;
	const {
		overflowLine1,
	} = useCommonStyles();

	return (
		<Link href={'/lives'} className={classes.root} underline={'none'}>
			<div>
				<div className={classes.tipsBox}>
					<div className={classes.tipsIcon} />
					<Typography id={'content'} className={`${classes.tipsContent} ${overflowLine1}`}>
						{'直播中'}
					</Typography>
				</div>
				<div className={classes.infoBox}>
					<Typography className={`${classes.infoHost} ${overflowLine1}`}>
						{host}
					</Typography>
					<Typography className={`${classes.infoTitle} ${overflowLine1}`}>
						{title}
					</Typography>
				</div>
			</div>
		</Link>
	);
};

export default Live;
