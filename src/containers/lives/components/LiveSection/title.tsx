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
	tipsBox: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		boxSizing: 'border-box',
		borderBottom: '4px solid rgb(167, 56, 52)',
	},
	tipsIcon: {
		borderRadius: '50%',
		background: 'rgb(167, 56, 52)',
		width: 12,
		minWidth: 12,
		height: 12,
		margin: theme.spacing(0, 1.5, 0, 0),
		[theme.breakpoints.down('sm')]: {
		  width: 8,
			minWidth: 8,
			height: 8,
			margin: theme.spacing(0, 1, 0, 0),
		},
	},
	tipsContent: {
		fontSize: 28,
		color: '#000',
		[theme.breakpoints.down('sm')]: {
		  fontSize: 20,
		},
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
			<div className={classes.tipsBox}>
				{status === 'publish' && (
					<div className={classes.tipsIcon} />
				)}
				<Typography className={`${classes.tipsContent} ${overflowLine1}`}>
					{status === 'publish' ? '直播中' : '直播已结束' }
				</Typography>
			</div>
		</Box>
	);
};

export default {};
