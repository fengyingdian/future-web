/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  gradient: {
    margin: theme.spacing(4, 0, 4),
    padding: theme.spacing(0),
    fontSize: 40,
    lineHeight: '48px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 40,
      lineHeight: '48px',
    },
  },
}));

interface Props {
  content: String;
}

export const Header = (props: Props) => {
  const { content = '' } = props;
  const classes = useStyles();

  return (
		<>
			<p className={classes.gradient}>
				{content}
			</p>

			<style jsx>
				{`
          p {
            text-align: center;
            font-weight: bold;
          }
          p:hover {
            background: -webkit-gradient(linear,30% 20%,80% 80%,from(#6a38ec),to(#CE4127));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
			</style>
		</>
  );
};

export default Header;
