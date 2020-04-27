/* eslint-disable max-len */
// get home page live card height
//
export const calcLiveCardHeight = ({
	topStoryHeight = 424,
	topStoryBottomHeight = 232,
	advertiseStripHeightRate = 0.16,
	leftSideRestHeight = 32,
	rightSideRate = 0.3,
	rightSideRestHeight = 491,
	clientWidth = 801,
}) => {
	if (clientWidth > 800) {
		return topStoryHeight + topStoryBottomHeight + ((1 - rightSideRate) * clientWidth - 64) * advertiseStripHeightRate + leftSideRestHeight - rightSideRestHeight;
	}

	return '100%';
};

export const getLiveCardHeight = (clientWidth: number) => {
	if (clientWidth >= 800 && clientWidth <= 1024) {
		return calcLiveCardHeight({
			clientWidth,
		});
	}
	if (clientWidth > 1024) {
		return calcLiveCardHeight({
			topStoryBottomHeight: 302,
			rightSideRestHeight: 598,
			clientWidth: clientWidth > 1280 ? 1280 : clientWidth,
		});
	}
};

export const getStream = (livestreams: any) => {
	if (livestreams.length) {
		const publishing = livestreams.filter(({ status = 'publish' }: any) => status === 'publish');
		if (publishing.length) {
			return {
				stream: publishing[0],
				isPlan: false,
			};
		}
		const planing = livestreams.filter(({ plan }: any) => !!plan && new Date(plan).getTime() > new Date().getTime());
		if (planing.length) {
			// eslint-disable-next-line max-len
			const sorted = planing.sort(({ plan: planA }: any, { plan: planB }: any) => new Date(planA).getTime() - new Date(planB).getTime());

			return {
				stream: sorted[0],
				isPlan: true,
			};
		}

		// eslint-disable-next-line max-len
		const sorted = livestreams.sort(({ createdAt: createdA }: any, { createdAt: createdB }: any) => new Date(createdB).getTime() - new Date(createdA).getTime());

		return {
			stream: sorted[0],
			isPlan: false,
		};
	}

	return {};
};
export default {};
