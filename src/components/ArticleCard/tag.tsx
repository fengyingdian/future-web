import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	tag: {
		fontSize: 14,
		fontWeight: 900,
		margin: theme.spacing(0, 1, 0, 0),
		color: '#f52828',
	},
	line: {
		flex: 1,
		background: '#999',
		height: '1px',
	},
}));

export const TagLarge = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ margin: '0 0 16px' }}>
			<div className={classes.tag} style={{ fontSize: '24px' }}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export const TagTopStory = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ margin: '16px 0 12px' }}>
			<div className={classes.tag} style={{ fontSize: '20px' }}>
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
			<div className={classes.tag}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export default { };
