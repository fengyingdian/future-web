/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ResponsibleTagSection from '../../components/ArticleSection/ResponsibleSection';
import MenuHeader from '../../components/MenuHeader/index';
import TopStoryCard from '../../components/ArticleCard/TopStoryCard';
import TopStoryAdvertiseCard from '../../components/AdvertiseCard/HomePageTopCard';
import TopStoryBottomCard from '../../components/ArticleCard/TopStoryBttomCard';
import Live from './components/Live/MediaCard';
import Focus from './components/Focus/index';
import Footer from './components/Footer/index';
import { getStream } from '../../utils/live';
import { lazyload } from '../../utils/image';
import useWechatSdk from '../../hooks/useWechatSdk';
import tracking from '../../tracking/index';

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
    flexWrap: 'wrap',
    maxWidth: theme.breakpoints.width('lg'),
    width: '100%',
    margin: theme.spacing(2, 0, 0),
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
  headerSectionTop: {
    width: '100%',
    margin: theme.spacing(0, 0, 2),
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
  const [clientWidth, setClientWidth] = useState(0);

  useWechatSdk({});

  const initResize = () => {
    if (document) {
      const headerLeft = document.querySelector('#header-left') as HTMLElement;
      const headerRight = document.querySelector('#header-right') as HTMLElement;
      return () => {
        const { clientWidth: width = 0 } = document.documentElement;
        if (headerLeft && headerRight) {
          headerRight.style.height = width >= 800 ? `${headerLeft.getBoundingClientRect().height}px` : 'auto';
        }
        setClientWidth(width);
        lazyload();
      };
    }
    return () => {};
  };

  useEffect(() => {
    tracking.enter();

    const resizing = initResize();

    // init
    resizing();

    // listener scroll
    window.addEventListener('scroll', lazyload, false);

    // listener resize
    window.addEventListener('resize', resizing, false);

    return () => {
      window.removeEventListener('scroll', lazyload, false);
      window.removeEventListener('resize', resizing, false);
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
      <div id="page-top-header" className={classes.menuHeader}>
        <MenuHeader menus={menus} selected="首页" />
      </div>
      <div className={classes.headerSection}>
        <div id="header-top" className={classes.headerSectionTop}>
          <TopStoryAdvertiseCard />
        </div>
        <div id="header-left" className={classes.headerSectionLeft}>
          <TopStoryCard
            articles={carousel}
            categoryName={sections[0].categoryName}
          />
          <TopStoryBottomCard {...hotnews[0]} />
          <TopStoryBottomCard {...hotnews[1]} />
        </div>
        <div id="header-right" className={classes.headerSectionRight}>
          <Live
            stream={stream}
            isPlan={isPlan}
          />
          <Focus
            clientWidth={clientWidth}
            articles={hotnews}
          />
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
