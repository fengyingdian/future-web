/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { fetchLiveSection } from '../src/service/index';
import LiveSection from '../src/components/LiveSection/index';

interface LiveProps {
  currentLive: any;
  relativeLives: any;
  id: any;
}

interface LiveState { }

class Live extends React.Component<LiveProps, LiveState> {
	static async getInitialProps({ req, query }: any) {
		const { id = '' } = query;

		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		const {
			currentLive,
			relativeLives,
		}: any = await fetchLiveSection('1');

		return {
			userAgent, currentLive, relativeLives, id,
		};
	}

	render() {
		const { currentLive, relativeLives, id } = this.props;

		return (
			<Container maxWidth={false}>
				<LiveSection id={id} currentLive={currentLive} relativeLives={relativeLives} />
			</Container>
		);
	}
}

export default Live;
