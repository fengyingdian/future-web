/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
// import dynamic from 'next/dynamic';
// import useStyles from '../src/theme/styles';
import { fetchLiveSection } from '../src/service/index';
import LiveSection from '../src/components/LiveSection/index';

// const LiveSection = dynamic(import('../src/components/LiveSection/index'), { ssr: false });

interface LiveProps {
  currentLive: any;
  relativeLives: any;
}

interface LiveState { }

class Live extends React.Component<LiveProps, LiveState> {
	static async getInitialProps({ req, query }: any) {
		const { id = '' } = query;

		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		const {
			currentLive,
			relativeLives,
		}: any = await fetchLiveSection(id);

		return { userAgent, currentLive, relativeLives };
	}

	render() {
		// const classes = useStyles();
		const { currentLive, relativeLives } = this.props;

		return (
			<Container maxWidth={false}>
				<LiveSection currentLive={currentLive} relativeLives={relativeLives} />
			</Container>
		);
	}
}

export default Live;
