import { useEffect } from 'react';
import { ZHUGEIO_APPKEY } from '../constants/index';

declare global {
  interface Window {
    zhuge:any;
  }
}

const useZhugeIoSdk = () => {
  useEffect(() => {
    window.zhuge = window.zhuge || [];
    window.zhuge.factory = (b) => (...args) => {
      const a = Array.prototype.slice.call(args);
      a.unshift(b);
      window.zhuge.push(a);
      return window.zhuge;
    };
    '_init debug identify getDid track trackLink trackForm page'
      .split(' ')
      .map(method => {
        window.zhuge[method] = window.zhuge.factory(method);
      });
    window.zhuge.load = (b, x)  => {
      if (!document.getElementById('zhuge-js')) {
        const a = document.createElement('script');
        const verDate = new Date();
        const verStr = verDate.getFullYear().toString()
          + verDate.getMonth().toString()
          + verDate.getDate().toString();
        a.type = 'text/javascript';
        a.id = 'zhuge-js';
        a.async = !0;
        a.src = (window.location.protocol === 'http:'
          ? 'http://sdk.zhugeio.com/zhuge.min.js?v='
          : 'https://zgsdk.zhugeio.com/zhuge.min.js?v=') + verStr;
        a.onerror = () => {
          window.zhuge.track = (ename, props, callback) => {
            if (callback && Object.prototype.toString.call(callback) === '[object Function]') {
              callback();
            }
          };
          window.zhuge.identify = window.zhuge.track;
        };
        const c = document.getElementsByTagName('script')[0];
        c.parentNode.insertBefore(a, c);
        window.zhuge._init(b, x);
      }
    };
    window.zhuge.load(ZHUGEIO_APPKEY);
    return () => {};
  }, []);
};

export default useZhugeIoSdk;
