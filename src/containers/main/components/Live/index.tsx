import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link, Typography, Box } from '@material-ui/core';
import useCommonStyles from '../../../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		borderTop: '4px solid rgb(167, 56, 52)',
		margin: theme.spacing(0, 0, 2),
		padding: theme.spacing(5, 5.25),
		background: '#fff',
		height: 295,
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
		flex: 1,
		fontSize: 32,
		color: '#131313',
	},
	infoBox: {
		flex: 1,
		width: '100%',
		borderTop: '1px solid #eee',
		borderBottom: '1px solid #eee',
		padding: theme.spacing(3.5, 0),
	},
	title: {
		fontSize: 20,
		lineHeight: 1.5,
		color: '#131313',
	},
	description: {
		fontSize: 16,

		lineHeight: 1.5,
		color: '#666',
		fontFamily: 'fangzheng-light',
		margin: theme.spacing(1, 0, 0),
	},
}));

const Live = (props: any) => {
	const classes = useStyles();
	const { stream = {}, isPlan = false } = props;
	const {
		status = 'publish_done',
		description = '',
		title = '',
	} = stream;
	const {
		overflowLine1,
		overflowLine2,
	} = useCommonStyles();

	return (
		<Link
			style={{
				width: '100%',
			}}
			href={'/lives?sp=m3u8'}
			underline={'none'}>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'flex-start'}
				className={classes.root}>
				<div className={classes.tipsBox}>
					{status === 'publish' && (
						<div className={classes.tipsIcon} />
					)}
					<Typography id={'content'} className={`${classes.tipsContent} ${overflowLine1}`}>
						{isPlan ? '直播即将开始' : (status === 'publish' ? '直播中' : '直播已结束')}
					</Typography>
				</div>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'flex-start'}
					className={classes.infoBox}>
					<Typography className={`${classes.title} ${overflowLine1}`}>
						{title}
					</Typography>
					<Typography className={`${classes.description} ${overflowLine2}`}>
						{description}
					</Typography>
				</Box>
			</Box>
		</Link>
	);
};

export default Live;
