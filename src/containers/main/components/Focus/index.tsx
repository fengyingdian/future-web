import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../../../components/ArticleSection/FocusSectionTitle';
import ArticleCard from '../../../../components/ArticleCard/FocusCard';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    margin: theme.spacing(0),
    padding: theme.spacing(1, 0, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 0, 2),
    },
    [theme.breakpoints.up(800)]: {
      padding: theme.spacing(0),
    },
  },
  articleRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    background: '#fff',
    [theme.breakpoints.down(800)]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.up(800)]: {
      padding: theme.spacing(1, 3),
    },
  },
  article: {
    width: '100%',
    padding: theme.spacing(0),
  },
}));

const Focus = (props: any) => {
  const classes = useStyles();
  const {
    title = '聚焦',
    clientWidth = 0,
    articles = [],
  } = props;

  return (
    <div id="header-foucs" className={classes.root}>
      <Title title={title} />
      <div className={classes.articleRoot}>
        {articles.map((article: any, index: number) => {
          if (clientWidth >= 800 ? (index > 1 && index < 8) : (index > -1 && index < 8)) {
            return (
              <div
                key={index}
                className={classes.article}
                style={{ borderBottom: `${index !== articles.length - 1 ? '1px solid #eee' : ''}` }}
              >
                <ArticleCard {...article} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Focus;
