/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Container, NoSsr } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TopDownAction } from '../../action-components/MountAction/top-down-action';
import ResponsibleTagSection from '../../components/ArticleSection/responsible-tag-five-section';
import MenuHeader from '../../components/MenuHeader/index';
import TopStoryCard from '../../components/ArticleCard/top-story-card';
import TopStoryBottomCard from '../../components/ArticleCard/top-story-bottom-card';
import Live from './components/Live/index';
import Focus from './components/Focus/index';
import Footer from './components/Footer/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '100%',
		padding: theme.spacing(0),
		background: '#f8f8f8',
	},
	menuHeader: {
		margin: theme.spacing(0, 0, 1),
		opacity: (props: any) => props.opacity,
		width: '100%',
	},
	headerSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		maxWidth: theme.breakpoints.width('lg'),
		width: '100%',
		padding: theme.spacing(0, 4, 0),
		margin: theme.spacing(5, 0, 0),
	},
	headerSectionLeft: {
		flex: 1,
	},
	headerSectionRight: {
		maxWidth: 308,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: theme.spacing(0, 0, 0, 2),
	},
	sections: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: theme.breakpoints.width('lg'),
		padding: theme.spacing(0, 3, 0),
	},
	footer: {
		width: '100%',
   	padding: theme.spacing(4, 0, 0),
	},
}));

interface Props {
  menus: any,
  sections: any,
  hotnews: any,
}

const Main = (props: Props) => {
	const [state, setState] = useState(1);

	const bindScroll = () => {
  	const header = document.getElementById('intro-page-top-header');
  	if (header) {
  	  const rect = header?.getBoundingClientRect();
			const { bottom, height } = rect;
			const pos = bottom / height;
  		const opacity = pos ** 3;
			if (opacity > 0 && opacity < 3) {
				setState(opacity);
  		}
  	}
	};

	useEffect(() => {
		window.addEventListener('scroll', bindScroll, false);

		return () => window.removeEventListener('scroll', bindScroll, false);
	});

	const classes = useStyles({ opacity: state });
	const { sections = [], hotnews = [], menus = [] } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<div id={'page-top-header'} className={classes.menuHeader}>
				<NoSsr>
					<TopDownAction>
						<MenuHeader menus={menus} selected={'首页'} />
					</TopDownAction>
				</NoSsr>
			</div>
			<div className={classes.headerSection}>
				<div className={classes.headerSectionLeft}>
					<TopStoryCard articles={sections[0].posts} categoryName={sections[0].categoryName} />
					<TopStoryBottomCard {...sections[0].posts[1]} />
				</div>
				<div className={classes.headerSectionRight}>
					<Live />
					<Focus articles={hotnews} />
				</div>
			</div>
			<div className={classes.sections}>
				{sections.map(({ categoryName, id = '', posts }: any) => (
					<ResponsibleTagSection key={id} name={categoryName} id={id} articles={posts} />
				))}
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</Container>
  	);
};

export default Main;
