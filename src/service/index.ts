/* eslint-disable max-len */
import axios from 'axios';
import { FABULOUS_SERVICE } from '../constants/index';

export const transcodeUrl = (id: string) => `https://s.flipchina.cn/flit/trans/items/${id}`;

export const homeFeedUrl = () => `${FABULOUS_SERVICE}/main/v1/homepage`;

export const menuUrl = () => `${FABULOUS_SERVICE}/main/v1/categories`;

export const articleSectionUrl = () => `${FABULOUS_SERVICE}/cat/v1/feed`;

export const liveSectionUrl = () => `${FABULOUS_SERVICE}/live/streams`;

//
// ─── FETCH MENU ─────────────────────────────────────────────────────────────────
//

export const fetchMenus = () => axios.get(menuUrl())
  .then((response: any) => {
    if (response.status === 200 && response.data.status === 0) {
      const {
        categories: menus = [],
      } = response.data;

      const sorted = menus.sort(({ order: first }: any, { order: second }: any) => first > second);

      return [
        {
          name: '首页',
          displayName: '首页',
        },
        ...sorted,
        {
          name: '直播',
          displayName: '时客',
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
    if (response.status === 200 && response.data) {
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
    if (response.status === 200 && response.data) {
      const {
        articles = [],
        offset: newoffset = 0,
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
// ─── FETCH LIVE SECTION ─────────────────────────────────────────────────────────
//

export const fetchLiveSection = () => axios.get(liveSectionUrl())
  .then((response: any) => {
    if (response.status === 200 && response.data) {
      const {
        streams = [],
      } = response.data;

      return {
        streams,
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
  })
  .catch((error: any) => {
    console.log(error);
  });
