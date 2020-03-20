import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import RecipeReviewCard from '../RecipeReviewCard';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		height: 400,
		// maxWidth: 300,
		backgroundColor: theme.palette.background.paper,
	},
}));

function renderRow(props: any) {
	const { style, index } = props;

	return (
		<ListItem style={style} key={index}>
			<ListItemText primary={`Item ${index + 1}`} />
			<RecipeReviewCard />
		</ListItem>
	);
}

const VirtualizedList = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<FixedSizeList height={400} width={'100%'} itemSize={10} itemCount={100}>
				{renderRow}
			</FixedSizeList>
		</div>
	);
};

export default VirtualizedList;
