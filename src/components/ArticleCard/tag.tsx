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
		color: 'rgb(167, 56, 52)',
	},
	line: {
		flex: 1,
		background: '#898989',
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
			<div className={classes.tag} style={{ fontSize: '16px' }}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export const TagRelative = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ padding: '0 0 16px' }}>
			<div className={classes.tag}>
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
		<div className={classes.root} style={{ margin: '20px 0 12px' }}>
			<div className={classes.tag} style={{ fontSize: '16px' }}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export const TagFocus = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ fontSize: '10px', lineHeight: '10px', padding: '0 0 4px' }}>
			<div className={classes.tag}>
				{tag}
			</div>
		</div>
	);
};

export const Tag = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ padding: '16px 0 0' }}>
			<div className={classes.tag}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export default { };
