import axios from 'axios';
import { useEffect } from 'react';

import {
  WECHAT_SDK_SERVCIE,
  WECAHT_SHARE_TITLE,
  WECAHT_SHARE_IMGURL,
  WECHAT_SHARE_DESC,
} from '../constants';

declare global {
  interface Window {
    wx: any;
  }
}

class WechatSdk {
  opts = {
    wechatScript: '',
    wechatSignatureApi: '',
    wechatDebug: false,
  };

  _wechatReady: any | null = null;

  constructor(opts: any) {
    const {
      wechatScript = 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js',
      wechatSignatureApi = WECHAT_SDK_SERVCIE,
      wechatDebug = false,
    } = opts || {};
    this.config({
      wechatScript,
      wechatSignatureApi,
      wechatDebug,
    });
    if (typeof window !== 'undefined') {
      this.loadWechatSdkScripts();
    }
  }

  config(opts: any) {
    Object.assign(this.opts, opts);
  }

  // http://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html
  loadWechatSdkScripts() {
    const {
      wechatScript,
      wechatSignatureApi,
      wechatDebug,
    } = this.opts;
    const wxScript = document.createElement('script');
    wxScript.async = true;
    wxScript.src = wechatScript;
    const loadWxScript = new Promise(resolve => {
      wxScript.onload = () => {
        resolve(window.wx);
      };
    });
    const point: any | null = document.getElementsByTagName('script')[0];
    point.parentNode.insertBefore(wxScript, point);
    this._wechatReady = new Promise((resolve, reject) => {
      Promise.all([
        loadWxScript,
        axios.get(wechatSignatureApi, {
          params: {
            url: window.location.href.replace(/#.*/, ''),
          },
        }),
      ]).then(([wx, json]: any) => {
        const {
          data: {
            appId,
            timestamp,
            nonceStr,
            signature,
          },
        } = json || {};
        wx.config({
          debug: wechatDebug,
          appId,
          timestamp,
          nonceStr,
          signature,
          jsApiList: [
            'updateAppMessageShareData',
            'updateTimelineShareData',
          ],
        });
        wx.ready(() => {
          resolve(wx);
        });
        wx.error(reject);
      }).catch(err => {
        console.warn(`WECHAT JS API LOADING FAILED: ${err.message}`);
      });
    });
  }

  wechatReady(fn: any) {
    if (!this._wechatReady) {
      return;
    }
    this._wechatReady.then(fn).catch((err: any) => {
      console.warn('WECHAT CONFIG ERROR: ', err);
    });
  }

  configWechatShare(shareConfig: any) {
    const {
      title = WECAHT_SHARE_TITLE,
      desc = WECHAT_SHARE_DESC,
      imgUrl = WECAHT_SHARE_IMGURL,
      link = window.document.URL,
      success = () => { },
      cancel = () => { },
    } = shareConfig;
    this.wechatReady((wx: any) => {
      wx.updateAppMessageShareData({
        title,
        desc,
        link,
        imgUrl,
        success,
        cancel,
      });
      wx.updateTimelineShareData({
        title,
        link,
        imgUrl,
        success,
        cancel,
      });
    });
  }
}

const useWechatSdk = (config: any) => {
  useEffect(() => {
    const wechat = new WechatSdk({});
    wechat.configWechatShare({
      ...config,
    });
  }, []);
};

export default useWechatSdk;

