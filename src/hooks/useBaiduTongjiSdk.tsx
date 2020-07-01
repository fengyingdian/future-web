import { useEffect } from 'react';
import { BAIDU_TONGJI_ID } from '../constants';

declare global {
  interface Window {
    _hmt: any,
  }
}

const useBaiduTongjiSdk = () => {
  useEffect(() => {
    window._hmt = window._hmt || [];
    const baiduScript = document.createElement('script');
    baiduScript.async = true;
    const point = document.getElementsByTagName('script')[0];
    baiduScript.src = `https://hm.baidu.com/hm.js?${BAIDU_TONGJI_ID}`;
    point.parentNode.insertBefore(baiduScript, point);
    return () => {};
  }, []);
};

export default useBaiduTongjiSdk;
