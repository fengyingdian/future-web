/* eslint-disable max-len */
import React from 'react';
import {
	Box,
} from '@material-ui/core';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LiveCard from '../LiveCard/index';

declare const Aliplayer: any;

interface LiveProps {
  lives: any;
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
		if (Aliplayer) {
			const player = new Aliplayer({
				id: 'J_prismPlayer',
				width: '100%',
				autoplay: true,
				isLive: true,
				source: 'https://video1.flipboard.cn/break/test.m3u8?auth_key=1585232276-0-0-f793f2351f14c83da671f3681e42615e',
			}, (() => {
				console.log('播放器创建好了。', player);
			}));
		} else {
			console.log({});
		}
	}

	render() {
		// const classes = useStyles();
		const { lives } = this.props;

		return (
			<>
				<Box
					display={'flex'}
					flexDirection={'clomun'}
					alignItems={'center'}
					justifyContent={'center'}
					flexWrap={'wrap'}
					style={{
						margin: '32px 0 0',
					}}>
					<div className={'prism-player'} id={'J_prismPlayer'} />
					{lives.map((live: any, index: any) => <LiveCard key={index} title={live.title} description={live.description} id={live.id} image={live.image} />)}
				</Box>
			</>
		);
	}
}

export default LiveSection;
