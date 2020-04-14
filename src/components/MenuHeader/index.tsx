import React from 'react';
import {
	Container, Box, Typography, Link,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { logoWithText } from '../../constants/logo';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: theme.spacing(0),
		padding: theme.spacing(0),
		width: '100%',
		height: 118,
		boxSizing: 'border-box',
		background: 'rgb( 206, 65, 39)',
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
		[theme.breakpoints.down(800)]: {
			flexDirection: 'column',
		  justifyContent: 'center',
		},
	},
	logo: {
		minWidth: 288,
		width: 288,
		[theme.breakpoints.down(800)]: {
			width: 168,
			minWidth: 168,
		},
	},
	menuBox: {
		flex: 1,
		margin: theme.spacing(1, 0, 0),
		[theme.breakpoints.up(800)]: {
			margin: theme.spacing(0, 0, 0, 12),
		},
		[theme.breakpoints.up(950)]: {
			margin: theme.spacing(0, 0, 0, 17),
		},
		[theme.breakpoints.up(1100)]: {
			margin: theme.spacing(0, 0, 0, 27),
		},
	},
	title: {
		color: '#fff',
		fontSize: 20,
		lineHeight: '32px',
		padding: theme.spacing(0, 1),
		transition: 'all .3s',
		textAlign: 'center',
		'&:hover': {
			// textShadow: '#f8f8f8 0.1em 0.1em 0.2em',
			fontFamily: 'fangzheng-medium',
		},
		[theme.breakpoints.down(800)]: {
			fontSize: 18,
			lineHeight: '24px',
		},
	},
	underline: {
		width: 20,
		height: 4,
		marginTop: 4,
		background: '#fff',
	},
}));

const herf = (name: string) => {
	if (name === '首页') {
		return '/';
	}
	if (name === '直播') {
		return '/lives?sp=m3u8';
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
										background: selected === name ? '#fff' : 'transparent',
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
