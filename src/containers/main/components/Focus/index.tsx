import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../../../components/ArticleSection/section-focus-title';
import ArticleCard from '../../../../components/ArticleCard/focus-card';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    margin: theme.spacing(0),
    padding: theme.spacing(1, 0, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 0, 2),
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
    articles = [],
    clientWidth = 0,
  } = props;

  return (
    <div className={classes.root}>
      <Title title={title} />
      <div className={classes.articleRoot}>
        {articles.slice(0, clientWidth >= 1024 ? 5 : 4).map((article: any, index: number) => (
          <div
            key={article.id}
            className={classes.article}
            style={{ borderBottom: `${index < (clientWidth >= 1024 ? 4 : 3) ? '1px solid #eee' : ''}` }}>
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Focus;
