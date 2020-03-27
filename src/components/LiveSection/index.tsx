/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React from 'react';
import {
	Box,
} from '@material-ui/core';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import LiveCard from '../LiveCard/index';

declare const videojs: any;
declare const Aliplayer: any;

interface LiveProps {
  currentLive: any;
  relativeLives: any;
  id: any;
}

interface LiveState { }

// const useStyles = makeStyles((theme: Theme) => createStyles({
// 	root: {
// 		width: '100%',
// 		maxWidth: '100%',
// 		margin: theme.spacing(2, 0, 2),
// 	},
// }));

class LiveSection extends React.Component<LiveProps, LiveState> {
	componentDidMount() {
		const { currentLive: { pullStream1 = '', pullStream2 = '' } = {}, id } = this.props;
		const stream = parseInt(id, 10) === 1 ? pullStream1 : pullStream2;
		console.log({ id, pullStream1, pullStream2 });
		if (Aliplayer) {
			const player = new Aliplayer({
				id: 'J_prismPlayer',
				width: '100%',
				autoplay: true,
				isLive: true,
				source: stream,
			}, (() => {
				console.log('player loaded', player);
			}));
		}
	}

	render() {
		// const classes = useStyles();
		const { id = '', currentLive } = this.props;
		console.log({ currentLive });

		return (
			<>
				<Box
					display={'flex'}
					flexDirection={'clomun'}
					alignItems={'center'}
					justifyContent={'center'}
					flexWrap={'wrap'}
					style={{
						margin: '32px 0 12px',
					}}>
					<h1>{parseInt(id, 10) === 1 ? ' FRONT ' : 'SIDE'}</h1>
					<div className={'prism-player'} id={'J_prismPlayer'} />
				</Box>
			</>
		);
	}
}

export default LiveSection;
