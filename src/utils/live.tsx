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
			const sorted = planing.sort(({ plan: planA }: any, { plan: planB }: any) => new Date(planA).getTime() < new Date(planB).getTime());

			return {
				stream: sorted[0],
				isPlan: true,
			};
		}

		// eslint-disable-next-line max-len
		const sorted = livestreams.sort(({ createdAt: createdA }: any, { createdAt: createdB }: any) => new Date(createdA).getTime() > new Date(createdB).getTime());

		return {
			stream: sorted[0],
			isPlan: false,
		};
	}

	return {};
};

export default {};
