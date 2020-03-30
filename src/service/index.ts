/* eslint-disable max-len */
import axios from 'axios';

const transcodeUrl = (id: string) => `http://flipboard-cn-static.oss-cn-hangzhou.aliyuncs.com/fleural/mtoutiaocom/labeled-contents/${id}.json`;

const articleSectionUrl = (id: string) => `${id}`;

const homeFeedUrl = () => '';

const liveSectionUrl = () => 'http://sapp.flipboard.cn/fabulous/lives.json';

const mockData = {
	sections: [
		{
			name: '科技',
			id: '1',
			articles: [
				{
					title: '荆楚大地农事忙',
					description: '本报武汉3月22日电 （记者贺广华、范昊天）满目春茶，层层叠叠。今年开春气温升得快，湖北省五峰土家族自治县茶农谭从新家的6亩茶园，早早地就冒出了新芽。他去茶园查看长势，眼看快要采摘头道茶了，但在这个不寻常的春天，他却有些着急。路遇检查疫情防控的县委书记陈华，他忍不住发问：“今年茶叶收入，到底还有没有指望？”',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/23/202003231017468466.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '海南自贸港建设加速推进',
					description: '作为面向太平洋、印度洋的航空门户枢纽，美兰机场二期锁定“5年后满足年吞吐量旅客3500万人次、货邮40万吨”目标，是自贸港发展旅游业、空港物流产业的基石。遭遇疫情，工期进度如何追回？工程缺工缺料怎么办？',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/24/202003240937227568.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '浓墨重彩书写依规治党新篇章',
					description: '治国必先治党，治党务必从严，从严必依法度。站在“两个一百年”奋斗目标的历史交汇点，以习近平同志为核心的党中央着眼坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，全方位推进新时代党内法规制度建设，在党内法规制度的坚持和巩固、完善和发展、遵守和执行上，取得新的进展和成效。',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/19/202003191021510185.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
			],
		},
		{
			name: '商业',
			id: '2',
			articles: [
				{
					title: '荆楚大地农事忙',
					description: '本报武汉3月22日电 （记者贺广华、范昊天）满目春茶，层层叠叠。今年开春气温升得快，湖北省五峰土家族自治县茶农谭从新家的6亩茶园，早早地就冒出了新芽。他去茶园查看长势，眼看快要采摘头道茶了，但在这个不寻常的春天，他却有些着急。路遇检查疫情防控的县委书记陈华，他忍不住发问：“今年茶叶收入，到底还有没有指望？”',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/23/202003231017468466.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '海南自贸港建设加速推进',
					description: '作为面向太平洋、印度洋的航空门户枢纽，美兰机场二期锁定“5年后满足年吞吐量旅客3500万人次、货邮40万吨”目标，是自贸港发展旅游业、空港物流产业的基石。遭遇疫情，工期进度如何追回？工程缺工缺料怎么办？',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/24/202003240937227568.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '浓墨重彩书写依规治党新篇章',
					description: '治国必先治党，治党务必从严，从严必依法度。站在“两个一百年”奋斗目标的历史交汇点，以习近平同志为核心的党中央着眼坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，全方位推进新时代党内法规制度建设，在党内法规制度的坚持和巩固、完善和发展、遵守和执行上，取得新的进展和成效。',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/19/202003191021510185.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
			],
		},
		{
			name: '生活',
			id: '3',
			articles: [
				{
					title: '荆楚大地农事忙',
					description: '本报武汉3月22日电 （记者贺广华、范昊天）满目春茶，层层叠叠。今年开春气温升得快，湖北省五峰土家族自治县茶农谭从新家的6亩茶园，早早地就冒出了新芽。他去茶园查看长势，眼看快要采摘头道茶了，但在这个不寻常的春天，他却有些着急。路遇检查疫情防控的县委书记陈华，他忍不住发问：“今年茶叶收入，到底还有没有指望？”',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/23/202003231017468466.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '海南自贸港建设加速推进',
					description: '作为面向太平洋、印度洋的航空门户枢纽，美兰机场二期锁定“5年后满足年吞吐量旅客3500万人次、货邮40万吨”目标，是自贸港发展旅游业、空港物流产业的基石。遭遇疫情，工期进度如何追回？工程缺工缺料怎么办？',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/24/202003240937227568.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '浓墨重彩书写依规治党新篇章',
					description: '治国必先治党，治党务必从严，从严必依法度。站在“两个一百年”奋斗目标的历史交汇点，以习近平同志为核心的党中央着眼坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，全方位推进新时代党内法规制度建设，在党内法规制度的坚持和巩固、完善和发展、遵守和执行上，取得新的进展和成效。',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/19/202003191021510185.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
			],
		},
		{
			name: '健康',
			id: '4',
			articles: [
				{
					title: '荆楚大地农事忙',
					description: '本报武汉3月22日电 （记者贺广华、范昊天）满目春茶，层层叠叠。今年开春气温升得快，湖北省五峰土家族自治县茶农谭从新家的6亩茶园，早早地就冒出了新芽。他去茶园查看长势，眼看快要采摘头道茶了，但在这个不寻常的春天，他却有些着急。路遇检查疫情防控的县委书记陈华，他忍不住发问：“今年茶叶收入，到底还有没有指望？”',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/23/202003231017468466.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '海南自贸港建设加速推进',
					description: '作为面向太平洋、印度洋的航空门户枢纽，美兰机场二期锁定“5年后满足年吞吐量旅客3500万人次、货邮40万吨”目标，是自贸港发展旅游业、空港物流产业的基石。遭遇疫情，工期进度如何追回？工程缺工缺料怎么办？',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/24/202003240937227568.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
				{
					title: '浓墨重彩书写依规治党新篇章',
					description: '治国必先治党，治党务必从严，从严必依法度。站在“两个一百年”奋斗目标的历史交汇点，以习近平同志为核心的党中央着眼坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，全方位推进新时代党内法规制度建设，在党内法规制度的坚持和巩固、完善和发展、遵守和执行上，取得新的进展和成效。',
					id: '68851d38f28b48ac4b22ffcbbe7d6998bd2847ec',
					image: 'http://back.rmsznet.com/upload/202003/19/202003191021510185.jpg',
					tags: ['标签1', '标签2', '标签3'],
				},
			],
		},
	],
};

//
// ─── FETCH HOME FEED ────────────────────────────────────────────────────────────
//

export const fetchHomeFeed = () => axios.get(homeFeedUrl())
	.then((response: any) => {
		if (response.status === 200) {
			return response.data && response.data.sections;
		}

		//
		// ─── MOCK DATA ───────────────────────────────────────────────────
		//
		return mockData.sections;
	})
	.catch((error: any) => {
		console.log(error);

		return mockData.sections;
	});

//
// ─── FETCH ARTICLE SECTION ─────────────────────────────────────────────────────
//

export const fetchArticleSection = (id: string) => axios.get(articleSectionUrl(id))
	.then((response: any) => {
		if (response.status === 200) {
			return response.data && response.data.section;
		}
	})
	.catch((error: any) => {
		console.log(error);

		//
		// ─── MOCK DATA ───────────────────────────────────────────────────
		//
		const sections = mockData.sections.find(({ id: sectionId }: any) => sectionId === id);

		return sections;
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
