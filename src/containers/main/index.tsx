/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Container, NoSsr } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ResponsibleTagSection from '../../components/ArticleSection/responsible-tag-five-section';
import MenuHeader from '../../components/MenuHeader/index';
import TopStoryCard from '../../components/ArticleCard/top-story-full-image-card';
import TopStoryAdvertiseCard from '../../components/AdvertiseCard/top-story-bottom-card';
import TopStoryBottomCard from '../../components/ArticleCard/top-story-bottom-card';
import Live from './components/Live/MediaCard';
import Focus from './components/Focus/index';
import Footer from './components/Footer/index';
import { getStream } from '../../utils/live';
import { lazyload } from '../../utils/image';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '100%',
    padding: theme.spacing(0),
    background: 'rgb(163, 9, 10)',
  },
  menuHeader: {
    margin: theme.spacing(0),
    opacity: (props: any) => props.opacity,
    width: '100%',
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: theme.breakpoints.width('lg'),
    width: '100%',
    margin: theme.spacing(5, 0, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2, 0),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2.5, 0),
    },
    [theme.breakpoints.up(800)]: {
      flexDirection: 'row',
      padding: theme.spacing(0, 3.5, 0),
    },
    [theme.breakpoints.up(1024)]: {
      padding: theme.spacing(0, 4, 0),
    },
  },
  headerSectionLeft: {
    flex: 1,
    [theme.breakpoints.down(800)]: {
      width: '100%',
    },
  },
  headerSectionRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: theme.spacing(2, 0, 0),
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      margin: theme.spacing(3, 0, 0),
    },
    [theme.breakpoints.up(800)]: {
      margin: theme.spacing(0, 0, 0, 2),
      maxWidth: '30%',
    },
    [theme.breakpoints.up(1024)]: {
      maxWidth: '30%',
      margin: theme.spacing(0, 0, 0, 2),
    },
  },
  sections: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: theme.breakpoints.width('lg'),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1, 0),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 1.5, 0),
    },
    [theme.breakpoints.up(800)]: {
      padding: theme.spacing(0, 2.5, 0),
    },
    [theme.breakpoints.up(1024)]: {
      padding: theme.spacing(0, 3, 0),
    },
  },
  footer: {
    width: '100%',
    padding: theme.spacing(8, 0, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6, 0, 0),
    },
  },
}));

interface Props {
  menus: any,
  carousel: any,
  hotnews: any,
  livestreams: any,
  sections: any,
}

const Main = (props: Props) => {
  // const [skeleton, setSkeleton] = useState(true);
  const [clientWidth, setClientWidth] = useState(0);

  const onResize = () => {
    setClientWidth(document.documentElement.clientWidth);

    lazyload();
  };

  useEffect(() => {
    // init
    onResize();

    // listener scroll
    window.addEventListener('scroll', lazyload, false);

    // listener resize
    window.addEventListener('resize', onResize, false);

    // (document as any).fonts.ready.then(() => {
    // 	// console.log('fonts ready home page');
    // 	setSkeleton(false);
    // });

    return () => {
      window.removeEventListener('scroll', lazyload, false);
      window.removeEventListener('resize', onResize, false);
    };
  });

  const classes = useStyles({ opacity: 1 });
  const {
    menus = [],
    carousel = [],
    hotnews = [],
    livestreams = [],
    sections = [],
  } = props;

  const { stream = {}, isPlan = false } = getStream(livestreams);

  return (
		<Container maxWidth={false} className={classes.root}>
			<div id={'page-top-header'} className={classes.menuHeader}>
				<NoSsr>
					<MenuHeader menus={menus} selected={'首页'} />
				</NoSsr>
			</div>
			<div className={classes.headerSection}>
				<div className={classes.headerSectionLeft}>
					<TopStoryCard
						articles={carousel}
						categoryName={sections[0].categoryName}
						clientWidth={clientWidth} />
					<TopStoryAdvertiseCard />
					<TopStoryBottomCard {...hotnews[6]} />
				</div>
				<div className={classes.headerSectionRight}>
					<Live
						stream={stream}
						isPlan={isPlan}
						clientWidth={clientWidth} />
					<Focus
						articles={hotnews}
						clientWidth={clientWidth} />
				</div>
			</div>
			<div className={classes.sections}>
				{menus.map(({ name, displayName }: any, index: any) => {
				  const result = sections.find(({ categoryName }: any) => name === categoryName);
				  if (result) {
				    return <ResponsibleTagSection key={index} name={name} displayName={displayName} articles={result.posts} />;
				  }
				})}
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</Container>
  	);
};

export default Main;
