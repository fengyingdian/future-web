/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from './section-article-title';
import ArticleCard from '../ArticleCard/normal-relative-card';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing(4, 0),
  },
}));

const ResponsibleTagRelativeSection = (props: any) => {
  const classes = useStyles();
  const { articles = [{}, {}, {}] } = props;
  if (articles.length <= 0) {
    return (<> </>);
  }

  return (
		<div className={classes.root}>
			<Title title={'大家都在看'} />
			{articles.map((article: any) => (
				<ArticleCard {...article} />
			))}
		</div>
  );
};

export default ResponsibleTagRelativeSection;
