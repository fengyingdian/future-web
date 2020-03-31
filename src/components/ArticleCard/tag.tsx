import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '100%',
		padding: theme.spacing(3, 0),
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	tag: {
		fontSize: 18,
		fontWeight: 900,
		margin: '0 12px 0 0',
		color: '#f52828',
	},
	line: {
		flex: 1,
		background: '#999',
		height: '1px',
	},
}));

export const TopStoryTag = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root}>
			<div className={classes.tag}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export const Tag = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ padding: '16px 0' }}>
			<div className={classes.tag} style={{ fontSize: '14px' }}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export default { };
