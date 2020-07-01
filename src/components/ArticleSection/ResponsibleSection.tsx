/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title, ReadMore } from './BlockSectionTitle';
import ResponsibleTagArticles from './ResponsibleSectionArticles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing(0),
  },
}));

const Sections = (props: any) => {
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

export default Sections;
