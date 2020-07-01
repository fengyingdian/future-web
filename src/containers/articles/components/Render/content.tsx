/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   content.tsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/05/27 12:16:47 by break             #+#    #+#             */
/*   Updated: 2020/07/01 16:27:45 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ImageNode as ImageNodeType, isTextNode, isImageNode } from '@flipnode/fleural/dist/common/RenderNode';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paragraph: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      wordBreak: 'break-all',
    },
    imageBox: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'cneter',
    },
    image: {
      maxWidth: '100%',
      background: '#f8f8f8',
      outline: 'none',
      border: '0',
      margin: theme.spacing(1, 0, 0),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(2, 0, 0),
      },
    },
    text: {
      fontSize: 14,
      lineHeight: 2,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
        lineHeight: 2,
      },
      color: '#666',
      fontFamily: 'fangzheng-light',
    },
  }),
);

type TextProps = { text: string };

const TextNode: any = ({ text }) => {
  const classes = useStyles();

  return (
    <span className={classes.text} >
      {text}
    </span>
  );
};

const ImageNode: any = (props) => {
  const classes = useStyles();
  const { url, appearance: { width = 100, height = 100 } = {} } = props;

  return (
    <div className={classes.imageBox}>
      <img
        className={classes.image}
        width={width}
        style={{
          height: 0,
          paddingTop: `${(height / width) * 100}%`,
        }}
        alt={''}
        data-src={url}
        data-lazyload
      />
    </div>
  );
};

const Paragraph: any = (props) => {
  const classes = useStyles();
  const { label = 'ignore', contents = [] } = props;
  if (label === 'ignore') {
    return null;
  }

  return (
    <>
      <div
        id={label}
        className={classes.paragraph}
        style={{
          margin: '0 0 28px',
          display: label === 'body' ? 'block' : 'flex',
        }}
      >
        {contents
          .filter((content) => {
            if (isTextNode(content)) {
              return !!content.text.trim();
            }

            return true;
          })
          .map((content, index) => {
            if (isTextNode(content)) {
              const { text } = content;

              return <TextNode key={index} text={text} />;
            }
            if (label === 'figure') {
              if (isImageNode(content)) {
                const { url, appearance } = content;
                return <ImageNode key={index} appearance={appearance} url={url} />;
              }
            }

            return <div>{`UNSUPPORTED RENDER NODE TYPE:${content.type}`}</div>;
          })}
      </div>
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

const ArticleContent: any = (props) => {
  const { contents = [] } = props;
  const classes = useStyles();

  const bindScroll = () => {
    const { clientHeight = 0 } = document.documentElement;
    const images = document.querySelectorAll('img[data-src][data-lazyload]');
    if (images.length < 1) {
      return;
    }
    Array.prototype.forEach.call(images, (img: HTMLImageElement) => {
      if (!img.dataset.src) {
        return;
      }
      const rect = img.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top < clientHeight) {
        // load image from CDN
        const image = new Image();
        image.onload = () => {
          img.src = image.src;
          img.style.height = 'auto';
          img.style.paddingTop = '0';
          // reset img attributions
          img.removeAttribute('data-src');
          img.removeAttribute('data-lazyload');
        };
        image.src = img.dataset.src;
      }
    });
  };

  useEffect(() => {
    bindScroll();

    window.addEventListener('scroll', bindScroll, false);

    return () => window.removeEventListener('scroll', bindScroll, false);
  });

  return (
    <div className={classes.root}>
      {contents.map((item, index) => (
        <Paragraph key={index} {...item} />
      ))}
    </div>
  );
};

export default ArticleContent;
