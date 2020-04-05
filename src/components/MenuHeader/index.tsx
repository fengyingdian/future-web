import React from 'react';
import {
	Container, Box, Typography, Link,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { logoWithText } from '../../constants/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0),
		padding: theme.spacing(1, 0),
		width: '100%',
		height: 128,
		boxSizing: 'border-box',
		background: 'rgb(167, 56, 52)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	innerBox: {
		maxWidth: theme.breakpoints.width('lg'),
		width: '100%',
		padding: theme.spacing(0, 3),
		boxSizing: 'border-box',
	},
	logo: {
		minWidth: 288,
		width: 288,
	},
	menuBox: {
		flex: 1,
		margin: theme.spacing(0, 0, 0, 6),
	},
	title: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 900,
		lineHeight: '32px',
		padding: theme.spacing(0),
		'&:hover': {
			color: '#111',
		},
	},
	underline: {
		width: 20,
		height: 4,
		background: '#fff',
		marginTop: 4,
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

const MenuHeader = (props: any) => {
	const classes = useStyles();
	const { menus = [], selected = '首页' } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<Box
				display={'flex'}
				flexDirection={'row'}
				justifyContent={'space-between'}
				alignItems={'center'}
				alignContent={'center'}
				flexWrap={'wrap'}
				className={classes.innerBox}>
				<Link href={herf('首页')} underline={'none'}>
					<img
						className={classes.logo}
						src={logoWithText}
						alt={''} />
				</Link>
				<Box
					display={'flex'}
					flexDirection={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					flexWrap={'nowrap'}
					className={classes.menuBox}>
					{menus.map(({ name, displayName }: any) => (
						<Link key={name} href={herf(name)} underline={'none'}>
							<Box
								display={'flex'}
								flexDirection={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								flexWrap={'nowrap'}>
								<Typography className={classes.title}>
									{displayName}
								</Typography>
								<div
									className={classes.underline}
									style={{
										background: selected === displayName ? '#fff' : 'transparent',
									}} />
							</Box>
						</Link>
					))}
				</Box>
			</Box>
		</Container>
	);
};

export default MenuHeader;
