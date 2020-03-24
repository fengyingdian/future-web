import React from 'react';
import { equals, prop } from 'ramda';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const isTextNode = (content: any) => equals('text', prop('type', content));
const isImageNode = (content: any) => equals('image', prop('type', content));

const useStyles = makeStyles(() => createStyles({
	root: {
		width: '100%',
		cursor: 'pointer',
	},
	text: {
		fontSize: '14px',
		color: '#121212',
		lineHeight: '24px',
		wordBreak: 'break-all',
	},
	image: {
		width: '100%',
	},
}));

const TextNode = ({ text, appearance }: any) => {
	const { color, size, weight } = appearance;
	const classes = useStyles();

	return (
		<p
			style={{
				color,
				fontSize: size,
				fontWeight: weight,
			}}
			className={
				classes.text
			}
		>
			{text}
		</p>
	);
};

const ImageNode = (props: any) => {
	const classes = useStyles();
	const { url, appearance } = props;

	return (
		<img className={classes.image} width={appearance.width} alt={''} src={url} />
	);
};

const ContentBlock = (props: any) => {
	const { block } = props;
	const { label = 'ignore' } = block;
	if (label === 'ignore') {
		return (<> </>);
	}

	return (
		<>
			{block.contents
				.filter((content: any) => {
					if (isTextNode(content)) {
						return !!content.text.trim();
					}

					return true;
				})
				.map((content: any) => {
					if (isTextNode(content)) {
						const { text, appearance } = content;

						return <TextNode key={content.text} text={text} appearance={appearance} />;
					}
					if (isImageNode(content)) {
						const { url, appearance } = content;

						return <ImageNode appearance={appearance} url={url} />;
					}

					return <div>{`UNSUPPORTED BLOCK TYPE:${content.type}`}</div>;
				})}
		</>
	);
};

const ArticleContent = (props: any) => {
	const { contents = [] } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{contents.map((item: any) => <ContentBlock block={item} />)}
		</div>
	);
};
export default ArticleContent;
