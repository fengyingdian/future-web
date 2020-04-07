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
		background: '#f8f8f8',
	},
	sectionRoot: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		background: '#f8f8f8',
		padding: theme.spacing(6, 3),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(6, 1),
		},
		maxWidth: theme.breakpoints.width('md'),
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

	useEffect(() => () => { });

	return (
		<Container className={classes.root}>
			<Head>
				<title>
					{`${name}-人民数字联播网`}
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
