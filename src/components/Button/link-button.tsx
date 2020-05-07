/* eslint-disable max-len */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(6, 0, 3),
    fontSize: 18,
  },
}));

type Props = {
  link: string;
  title: string;
};

export const LinkButton = (props: Props) => {
  const classes = useStyles();
  const { link = '', title = '' } = props;

  return (
    <Typography className={classes.root} color={'textSecondary'}>
      <Link href={link}>{title}</Link>
    </Typography>
  );
};

export default {};
