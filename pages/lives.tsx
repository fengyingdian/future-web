/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
// import dynamic from 'next/dynamic';
// import useStyles from '../src/theme/styles';
import { fetchLiveSection } from '../src/service/index';
import LiveSection from '../src/components/LiveSection/index';

// const LiveSection = dynamic(import('../src/components/LiveSection/index'), { ssr: false });

interface LiveProps {
  lives: any;
}

interface LiveState { }

class Live extends React.Component<LiveProps, LiveState> {
	static async getInitialProps({ req }: any) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		const lives = await fetchLiveSection();

		return { userAgent, lives };
	}

	render() {
		// const classes = useStyles();
		const { lives = [] } = this.props;

		return (
			<Container maxWidth={false}>
				<LiveSection lives={lives} />
			</Container>
		);
	}
}

export default Live;
