/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from './components/LiveSection/title';
import MenuHeader from '../../components/MenuHeader/index';
import LiveSection from './components/LiveSection/index';
import { getStream } from '../../utils/live';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '100%',
		padding: '0',
		background: 'rgb(163, 9, 10)',
	},
	sectionRoot: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: theme.breakpoints.width(1024),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2, 2),
		},
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(3, 2.5),
		},
		[theme.breakpoints.up(800)]: {
			padding: theme.spacing(4.5, 3.5),
		},
		[theme.breakpoints.up(1024)]: {
			padding: theme.spacing(6, 3),
		},
	},
}));

const Live = (props: any) => {
	const classes = useStyles();
	const {
		name = '直播',
		menus = [],
		streams = [],
		sp = '',
	} = props;

	const {
		stream = {},
		isPlan = false,
	} = getStream(streams);

	const { displayName } = menus.find(({ name: menuName }: any) => name === menuName);

	useEffect(() => () => { });

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{`${displayName}-人民数字联播网`}
				</title>
			</Head>
			<Container maxWidth={false} className={classes.root}>
				<MenuHeader selected={name} menus={menus} />
				<Container maxWidth={false} className={classes.sectionRoot}>
					<Title status={stream.status} isPlan={isPlan} />
					<LiveSection sp={sp} stream={stream} />
				</Container>
			</Container>
		</Container>
	);
};

export default Live;
