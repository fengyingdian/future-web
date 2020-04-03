import { equals, prop } from 'ramda';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const isTextNode = (content: any) => equals('text', prop('type', content));
// const isImageNode = (content: any) => equals('png', prop('type', content));

const useStyles = makeStyles(() => createStyles({
	root: {
		width: '100%',
		cursor: 'pointer',
	},
	text: {
		fontSize: 14,
		color: '#121212',
		lineHeight: 1.5,
		wordBreak: 'break-all',
	},
	image: {
		width: '100%',
	},
}));

const TextNode = ({ text }: any) => {
	// const { color, size, weight } = appearance;
	const classes = useStyles();

	return (
		<span
			className={
				classes.text
			}
		>
			{text}
		</span>
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
	const {
		label = 'ignore',
		contents = [],
	} = props;
	if (label === 'ignore') {
		return (<> </>);
	}

	return (
		<>
			<p id={label}>
				{contents
					.filter((content: any) => {
						if (isTextNode(content)) {
							return !!content.text.trim();
						}

						return true;
					})
					.map((content: any, index: any) => {
						if (isTextNode(content)) {
							const { text, appearance } = content;

							return <TextNode key={index} text={text} appearance={appearance} />;
						}
						if (label === 'figure') {
							const { url, appearance } = content;

							return <ImageNode key={index} appearance={appearance} url={url} />;
						}

						return <div>{`UNSUPPORTED BLOCK TYPE:${content.type}`}</div>;
					})}
			</p>
			<style jsx>
				{`
          #blockquote {
            background: #f52828;
          }
          #figurecaption {
            background: yellow;
          }
      `}
			</style>
		</>
	);
};

const ArticleContent = (props: any) => {
	const { contents = [] } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{contents.map((item: any, index: any) => <ContentBlock key={index} {...item} />)}
		</div>
	);
};

export default ArticleContent;
