/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ResponsibleArticles from '../../../../components/ArticleSection/ResponsibleSectionArticles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: '100%',
  },
  section: {
    margin: theme.spacing(0, 0, 2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0),
    },
  },
}));

const Page = (props: any) => {
  const classes = useStyles();
  const { articles = [] } = props;

  if (articles.length <= 0) {
    return (<> </>);
  }

  const sections = [];
  for (let i = 0; i < articles.length; i += 5) {
    sections.push(articles.slice(i, i + 5));
  }

  return (
    <div className={classes.root}>
      {sections.length && sections.map(((sectionArticles: any, index: number) => (
        <div key={index} className={classes.section}>
          <ResponsibleArticles articles={sectionArticles} />
        </div>
      )))}
    </div>
  );
};

export default Page;
