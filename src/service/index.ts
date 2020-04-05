/* eslint-disable max-len */
import axios from 'axios';
import { fabulousService } from '../constants/index';

export const transcodeUrl = (id: string) => `https://s.flipchina.cn/flit/trans/items/${id}`;

export const homeFeedUrl = () => `${fabulousService}/main/v1/homepage`;

export const menuUrl = () => `${fabulousService}/main/v1/categories`;

export const articleSectionUrl = () => `${fabulousService}/cat/v1/feed`;

export const liveSectionUrl = () => 'http://sapp.flipboard.cn/fabulous/lives.json';

//
// ─── FETCH MENU ─────────────────────────────────────────────────────────────────
//

export const fetchMenus = () => axios.get(menuUrl())
	.then((response: any) => {
		if (response.status === 200 && response.data && response.data.status === 0) {
			const {
				categories: menus = [],
			} = response.data;

			return [
				{
					name: '首页',
					displayName: '首页',
				},
				...menus,
				{
					name: '直播',
					displayName: '直播',
				},
			];
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
// ─── FETCH HOME FEED ────────────────────────────────────────────────────────────
//

export const fetchHomeFeed = () => axios.get(homeFeedUrl())
	.then((response: any) => {
		if (response.status === 200 && response.data && response.data.status === 0) {
			const {
				carousel = [],
				livestreams = [],
				categories: sections = [],
				hotnews = [],
			} = response.data;

			return {
				carousel,
				livestreams,
				sections,
				hotnews,
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

export const fetchArticleSection = (name: string, offset: number = 0, limit: number = 20) => axios.get(articleSectionUrl(), {
	params: {
		categoryName: name,
		offset,
		limit,
	},
})
	.then(response => {
		if (response.status === 200 && response.data && response.data.status === 0) {
			const {
				articles = [],
				offset: newoffset,
			} = response.data;

			return {
				articles,
				newoffset,
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
		if (response.status === 200 && response.data) {
			const {
				title = '',
				contents = [],
				cover = {},
				publisherName = '',
				date = '',
				tags = [],
			} = response.data;

			return {
				title,
				contents,
				cover,
				publisherName,
				date,
				tags,
			};
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
