/* eslint-disable max-len */
import React from 'react';
import {
	Box,
} from '@material-ui/core';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LiveCard from '../LiveCard/index';

declare const Aliplayer: any;

interface LiveProps {
  currentLive: any;
  relativeLives: any;
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
		const { currentLive: { pullStream = '' } = {} } = this.props;
		console.log({ pullStream });
		if (Aliplayer) {
			const player = new Aliplayer({
				id: 'J_prismPlayer',
				width: '100%',
				autoplay: true,
				isLive: true,
				source: pullStream,
			}, (() => {
				console.log('player loaded', player);
			}));
		} else {
			console.log({});
		}
	}

	render() {
		// const classes = useStyles();
		const { relativeLives } = this.props;

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
					{relativeLives.map((live: any, index: any) => <LiveCard key={index} title={live.title} description={live.description} id={live.id} image={live.image} />)}
				</Box>
			</>
		);
	}
}

export default LiveSection;
