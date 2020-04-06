/* eslint-disable max-len */
import React from 'react';
import {
	Box, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useCommonStyles from '../../../../theme/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		padding: theme.spacing(0),
		width: '100%',
		boxSizing: 'border-box',
	},
	title: {
		fontSize: 28,
		fontWeight: 900,
		lineHeight: '28px',
		color: '#000',
		width: '100%',
		boxSizing: 'border-box',
		borderBottom: '4px solid rgb(167, 56, 52)',
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
}));

export const Title = (props: any) => {
	const classes = useStyles();
	const { status = 'publish_done' } = props;

	const {
		overflowLine1,
	} = useCommonStyles();

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'flex-start'}
			className={classes.root}>
			{status === 'publish' && (
				<div className={classes.tipsBox}>
					<div className={classes.tipsIcon} />
					<Typography id={'content'} className={`${classes.tipsContent} ${overflowLine1}`}>
						{'直播中'}
					</Typography>
				</div>
			)}
			{status === 'publish_done' && (
				<Typography className={classes.title}>
					{'直播已结束'}
				</Typography>
			)}
		</Box>
	);
};

export default {};
