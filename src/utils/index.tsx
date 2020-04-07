export const url = (cover: any) => {
	if (cover && cover.url) {
		return cover.url;
	}

	return '';
};

export default {};
