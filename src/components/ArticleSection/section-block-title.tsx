/* eslint-disable max-len */
import React from 'react';
import {
	Box, Typography, Link,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0, 0, 1),
		padding: theme.spacing(2, 1, 2),
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
		borderBottom: '10px solid #f52828',
	},
	readMoreRoot: {
		width: '100%',
		padding: theme.spacing(0, 1),
	},
	readMoreBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0 0 4px',
		borderBottom: '4px solid #f52828',
	},
	readMoreText: {
		fontSize: 14,
		fontWeight: 900,
		color: '#111',
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
		<Box display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'} className={classes.readMoreRoot}>
			<Link href={`/sections?name=${name}`} className={classes.readMoreBox}>
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
					xmlns={'http://www.w3.org/2000/svg'}
					p-id={'16799'}
					width={'20'}
					height={'20'}>
					<path d={'M320.662 291.061L703.339 512 320.661 732.938z'} p-id={'16800'} fill={'#f52828'} />
				</svg>
			</Link>
		</Box>
	);
};

export default {};
