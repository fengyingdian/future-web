import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { menus } from '../../service/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0),
		padding: theme.spacing(0, 4),
		width: '100%',
		height: '100px',
		boxSizing: 'border-box',
		background: 'rgb(167, 56, 52)',
	},
	logo: {
		minWidth: '200px',
		fontSize: 28,
		fontWeight: 900,
		color: '#fff',
	},
	menuBox: {
		flex: 1,
	},
	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 900,
		padding: theme.spacing(0, 0, 0, 12),
		'&:hover': {
			color: '#111',
		},
	},
}));

const herf = (name: string) => {
	if (name === '首页') {
		return '/';
	}
	if (name === '直播') {
		return '/lives?id=1';
	}

	return `/sections?name=${name}`;
};

const MenuHeader = () => {
	const classes = useStyles();

	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			justifyContent={'space-between'}
			alignItems={'center'}
			flexWrap={'wrap'}
			className={classes.root}>
			<Typography className={classes.logo}>
				{'人民数字联播网'}
			</Typography>
			<Box
				display={'flex'}
				flexDirection={'row'}
				justifyContent={'flex-end'}
				alignItems={'center'}
				flexWrap={'wrap'}
				className={classes.menuBox}>
				{menus.map((name: any) => (
					<Link key={name} href={herf(name)} underline={'none'}>
						<Typography className={classes.title}>
							{name}
						</Typography>
					</Link>
				))}
			</Box>
		</Box>
	);
};

export default MenuHeader;
