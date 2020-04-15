/* eslint-disable max-len */
import React from 'react';
import {
	Box, Typography, Link,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0),
		padding: theme.spacing(2, 1, 2),
		width: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(0, 0, 1),
		},
	},
	title: {
		fontSize: 24,
		lineHeight: '28px',
		color: '#131313',
		width: '100%',
		boxSizing: 'border-box',
		borderBottom: '4px solid rgb( 206, 65, 39)',
		[theme.breakpoints.up('sm')]: {
			fontSize: 28,
		},
	},
	readMoreRoot: {
		boxSizing: 'border-box',
		margin: theme.spacing(2, 1, 0),
		padding: theme.spacing(2, 1),
		background: '#fff',
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(0, 1, 2),
			padding: theme.spacing(2, 1),
		},
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(3, 1, 2),
		  padding: theme.spacing(2, 1),
		},
	},
	readMoreBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottom: '3px solid rgb( 206, 65, 39)',
	},
	readMoreText: {
		fontSize: 14,
		color: '#131313',
	},
}));

export const Title = (props: any) => {
	const classes = useStyles();
	const { title = '' } = props;

	return (
		<Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} className={classes.root}>
			<Typography className={classes.title}>
				{title}
			</Typography>
		</Box>
	);
};

export const ReadMore = (props: any) => {
	const classes = useStyles();
	const { name = '' } = props;

	return (
		<Box display={'flex'} flexDirection={'row'} justifyContent={'center'} className={classes.readMoreRoot}>
			<Link href={`/sections?name=${name}`} className={classes.readMoreBox} underline={'none'}>
				<Typography className={classes.readMoreText}>
					{'查看更多'}
				</Typography>
				<svg
					className={'icon'}
					style={{
						transform: 'translateX(5px)',
					}}
					viewBox={'0 0 1024 1024'}
					version={'1.1'}
					xmlns={'http://www.w3.org/2131313/svg'}
					p-id={'16799'}
					width={'22'}
					height={'22'}>
					<path d={'M320.662 291.061L703.339 512 320.661 732.938z'} p-id={'16800'} fill={'rgb( 206, 65, 39)'} />
				</svg>
			</Link>
		</Box>
	);
};

export default {};
