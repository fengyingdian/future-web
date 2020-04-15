import { equals, prop } from 'ramda';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const isTextNode = (content: any) => equals('text', prop('type', content));
// const isImageNode = (content: any) => equals('png', prop('type', content));

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		cursor: 'pointer',
	},
	text: {
		fontSize: 12,
		lineHeight: 1.5,
		color: '#666',
		fontFamily: 'fangzheng-light',
		wordBreak: 'break-all',
		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
			lineHeight: 2,
		},
	},
	image: {
		width: '100%',
		margin: theme.spacing(1, 0, 0),
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(2, 0, 0),
		},
	},
}));

const TextNode = ({ text }: any) => (
	<span>
		{text}
	</span>
);

const ImageNode = (props: any) => {
	const classes = useStyles();
	const { url, appearance } = props;

	return (
		<img className={classes.image} width={appearance.width} alt={''} src={url} />
	);
};

const ContentBlock = (props: any) => {
	const classes = useStyles();
	const {
		label = 'ignore',
		contents = [],
	} = props;
	if (label === 'ignore') {
		return (<> </>);
	}

	return (
		<>
			<p
				id={label}
				className={classes.text}
				style={{
					margin: '0 0 28px',
				}}>
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
            padding: 16px;
            background: #f8f8f8;
          }
          #figurecaption {
            align-self: center;
            color: #666;
            font-size: 16px;
            width: 100%;
            text-align: center;
          }
          @media only screen and (max-width: 600px) {
            #figurecaption {
              font-size: 12px;
            }
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
