/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ResponsibleArticles from '../../../../components/ArticleSection/responsible-tag-five-articles';

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

  const firstArticles = articles.slice(0, 5);
  const seconArticles = articles.slice(5, 10);
  const thirdArticles = articles.slice(10, 15);
  const fourtArticles = articles.slice(15, 20);

  return (
		<div className={classes.root}>
			<div className={classes.section}>
			  <ResponsibleArticles articles={firstArticles} />
			</div>
			<div className={classes.section}>
			  <ResponsibleArticles articles={seconArticles} />
			</div>
			<div className={classes.section}>
			  <ResponsibleArticles articles={thirdArticles} />
			</div>
			<div className={classes.section}>
			  <ResponsibleArticles articles={fourtArticles} />
			</div>
		</div>
  );
};

export default Page;
