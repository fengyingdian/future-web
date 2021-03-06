/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title, ReadMore } from './section-block-title';
import ResponsibleTagArticles from './responsible-tag-five-articles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing(0),
  },
}));

const ResponsibleTagFiveSection = (props: any) => {
  const classes = useStyles();
  const {
    name = '', displayName = '', id = '', articles = [],
  } = props;
  if (articles.length <= 0) {
    return (<> </>);
  }

  return (
    <div className={classes.root}>
      <Title title={displayName} />
      <ResponsibleTagArticles articles={articles} />
      <ReadMore id={id} name={name} />
    </div>
  );
};

export default ResponsibleTagFiveSection;
