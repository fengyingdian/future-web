/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'next/router';
import useStyles from '../src/theme/styles';
import { fetchMenus, fetchArticleTranscode } from '../src/service/index';
import Article from '../src/containers/articles/index';
import useFonts from '../src/hooks/useFonts';

const Index = (props: any) => {
  const classes = useStyles();

  useFonts();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Article {...props} />
    </Container>
  );
};

Index.getInitialProps = async ({ query = {} }: any) => {
  const { id = '', category: categoryName = '' } = query;

  const menus: any = await fetchMenus();

  const result: any = await fetchArticleTranscode(id);

  return {
    categoryName,
    menus,
    ...result,
  };
};

export default withRouter(Index);
