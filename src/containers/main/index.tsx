/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Container, NoSsr } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TopDownAction } from '../../action-components/MountAction/top-down-action';
import ResponsibleTagTripleSection from '../../components/ArticleSection/responsible-tag-triple-section';
import { BottomUpAction } from '../../action-components/MountAction/bottom-up-action';
import MenuBar from './components/MenuBar/index';
import Header from './components/Title/index';
import TopStoryCard from '../../components/ArticleCard/top-story-card';
import Live from './components/Live/index';
import Focus from './components/Focus/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '100%',
		padding: '0',
		background: '#f8f8f8',
	},
	title: {
		margin: theme.spacing(1, 0, 1),
		opacity: (props: any) => props.opacity,
	},
	menuBar: {
		width: '100%',
		position: 'sticky',
		left: 0,
		top: 0,
		zIndex: 20,
	},
	headerSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		maxWidth: '1280px',
		padding: theme.spacing(0, 4, 0),
		margin: theme.spacing(5, 0, 0),
	},
	headerSectionLeft: {
		flex: 1,
		maxWidth: '100%',
	},
	headerSectionRight: {
		maxWidth: '34%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: theme.spacing(0, 0, 0, 4),
	},
	sections: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: '1280px',
		padding: theme.spacing(0, 4, 0),
	},
}));

interface Props {
  menus: any,
  sections: any,
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
	const { menus, sections } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<div id={'intro-page-top-header'} className={classes.title}>
				<NoSsr>
					<TopDownAction>
						<Header content={'人民数字'} />
					</TopDownAction>
				</NoSsr>
			</div>
			<div className={classes.menuBar}>
				<MenuBar menus={menus} />
			</div>
			<div className={classes.headerSection}>
				<div className={classes.headerSectionLeft}>
					<BottomUpAction>
					  <TopStoryCard />
					</BottomUpAction>
				</div>
				<div className={classes.headerSectionRight}>
					<Live />
					<Focus />
				</div>
			</div>
			<div className={classes.sections}>
				{sections.map(({ categoryName, id = '', posts }: any, index: any) => {
					if (index % 2 === 0) {
						return (
					    <ResponsibleTagTripleSection key={id} name={categoryName} id={id} articles={posts} />
						);
					}

					return (
					  <ResponsibleTagTripleSection key={id} name={categoryName} id={id} articles={posts} />
					);
				})}
			</div>
		</Container>
  	);
};

export default Main;
