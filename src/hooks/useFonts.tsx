import { useEffect } from 'react';

import FontFaceObserver from 'fontfaceobserver';

const initFontLoad = () => {
  const opts = {
    isLoaded: false,
    tryCount: 0,
    maxCount: 40,
  };
  const loadFontObserver = () => {
    const {
      isLoaded = false,
      tryCount = 0,
      maxCount = 40,
    } = opts;
    if (tryCount >= maxCount) {
      return;
    }
    opts.tryCount = tryCount + 1;
    if (!isLoaded) {
      const font = new FontFaceObserver('fangzheng-black');
      font.load()
        .then(() => {
          opts.isLoaded = true;
          document.body.style.fontFamily = 'fangzheng-black';
        })
        .catch(loadFontObserver);
    }
  };
  return loadFontObserver;
};

const loadFontObserver = initFontLoad();

const useFonts = () => {
  useEffect(() => {
    loadFontObserver();
    return () => {};
  }, []);
};

export default useFonts;
