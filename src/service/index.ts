/* eslint-disable max-len */
import axios from 'axios';
import { fabulousServiceHomePageUrl } from '../constants/index';

export const transcodeUrl = (id: string) => `http://flipboard-cn-static.oss-cn-hangzhou.aliyuncs.com/fleural/mtoutiaocom/labeled-contents/${id}.json`;

export const articleSectionUrl = (id: string) => `${id}`;

export const homeFeedUrl = () => fabulousServiceHomePageUrl;

export const liveSectionUrl = () => 'http://sapp.flipboard.cn/fabulous/lives.json';

//
// ─── FETCH HOME FEED ────────────────────────────────────────────────────────────
//

export const fetchHomeFeed = () => axios.get(homeFeedUrl())
	.then((response: any) => {
		if (response.status === 200 && response.data && response.data.status === 0) {
			const {
				carousel = [],
				livestreams = [],
				categories: sections = [],
			} = response.data;

			return {
				carousel,
				livestreams,
				sections,
			};
		}

		//
		// ─── ERROR ───────────────────────────────────────────────────
		//
		return [];
	})
	.catch((error: any) => {
		console.log(error);
	});

//
// ─── FETCH ARTICLE SECTION ─────────────────────────────────────────────────────
//

export const fetchArticleSection = (name: string) => axios.get(homeFeedUrl())
	.then(response => {
		if (response.status === 200 && response.data && response.data.status === 0) {
			const {
				categories: sections = [],
			} = response.data;

			const section = sections.find(({ categoryName = '' }: any) => categoryName === name);

			return {
				section,
			};
		}
	})
	.catch((error: any) => {
		console.log(error);
	});

//
// ─── FETCH ARTICLE TRANSCODE ────────────────────────────────────────────────────
//

export const fetchArticleTranscode = (id: string) => axios.get(transcodeUrl(id))
	.then((response: any) => {
		if (response.status === 200) {
			return response.data && response.data.contents;
		}

		return [];
	})
	.catch((error: any) => {
		console.log(error);
	});


//
// ─── FETCH LIVE SECTION ─────────────────────────────────────────────────────────
//

export const fetchLiveSection = (id: string) => axios.get(liveSectionUrl())
	.then((response: any) => {
		if (response.status === 200) {
			const { lives = [] } = response.data;
			const currentLive = lives.find(({ id: liveId }: any) => String(liveId) === id);
			const relativeLives = lives.filter(({ id: liveId }: any) => String(liveId) !== id);

			return {
				currentLive,
				relativeLives,
			};
		}
	})
	.catch((error: any) => {
		console.log(error);
	});
