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
		fontSize: 12,
		margin: theme.spacing(0, 2, 0, 0),
		color: '#CE4127',
		[theme.breakpoints.up('sm')]: {
			fontSize: 14,
		},
	},
	largeTag: {
   	fontSize: 12,
		margin: theme.spacing(0, 2, 0, 0),
		color: '#CE4127',
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
		},
	},
	line: {
		flex: 1,
		background: '#eee',
		height: 1,
	},
}));

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

export const TagTopStory = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ margin: '0 0 16px' }}>
			<div className={classes.largeTag}>
				{tag}
			</div>
			<div className={classes.line} />
		</div>
	);
};

export const TagLarge = (props: any) => {
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

export const TagSmall = (props: any) => {
	const classes = useStyles();
	const {
		tag = '',
	} = props;

	return (
		<div className={classes.root} style={{ padding: '0' }}>
			<div className={classes.tag}>
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
		<div className={classes.root}>
			<div className={classes.tag} style={{ fontSize: '11px', lineHeight: '10px', fontFamily: 'fangzheng-bold' }}>
				{tag}
			</div>
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

export default { };
