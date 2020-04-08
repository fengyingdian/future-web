import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../../../components/ArticleSection/section-focus-title';
import ArticleCard from '../../../../components/ArticleCard/focus-card';

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		margin: theme.spacing(0, 0, 2),
		padding: theme.spacing(1, 0, 0),
	},
	articleRoot: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		background: '#fff',
		padding: theme.spacing(1, 3),
	},
	article: {
		width: '100%',
		padding: theme.spacing(0),
	},
}));

const Focus = (props: any) => {
	const classes = useStyles();
	const {
		title = '聚焦',
		articles,
	} = props;

	return (
		<div className={classes.root}>
			<Title title={title} />
			<div className={classes.articleRoot}>
				{articles.slice(0, 6).map((article: any, index: number) => (
					<div
						key={article.id}
						className={classes.article}
						style={{ borderBottom: `${index < 5 ? '1px solid #eee' : ''}` }}>
						<ArticleCard {...article} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Focus;
