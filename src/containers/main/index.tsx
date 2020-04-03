/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Container, NoSsr } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TopDownAction } from '../../action-components/MountAction/top-down-action';
import ResponsibleTagTripleSection from '../../components/ArticleSection/responsible-tag-five-section';
import MenuHeader from '../../components/MenuHeader/index';
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
		padding: theme.spacing(0, 4, 0),
	},
}));

interface Props {
  sections: any,
}

const Main = (props: Props) => {
	const [state, setState] = useState(1);

	const bindScroll = (e: any) => {
		console.log({ e });
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
	const { sections } = props;

	return (
		<Container maxWidth={false} className={classes.root}>
			<div id={'page-top-header'} className={classes.menuHeader}>
				<NoSsr>
					<TopDownAction>
						<MenuHeader />
					</TopDownAction>
				</NoSsr>
			</div>
			<div className={classes.headerSection}>
				<div className={classes.headerSectionLeft}>
					<TopStoryCard />
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
