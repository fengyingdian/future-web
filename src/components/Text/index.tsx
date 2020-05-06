/* eslint-disable max-len */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  gradient: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    fontSize: 80,
    lineHeight: '88px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 140,
      lineHeight: '148px',
    },
  },
}));

interface Props {
  content: String;
}

export const GradientText = (props: Props) => {
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
            background: -webkit-gradient(linear,30% 20%,80% 80%,from(#CE4127),to(#6a38ec));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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

export default { };
