import axios from 'axios';
import { Component } from 'react';

declare global {
  interface Window {
    wx: any;
  }
}

export default class AppSkeleton extends Component {
  opts = {
  	wechatScript: '',
  	wechatSignatureApi: '',
  	wechatDebug: '',
  }

  _wechatReady: any | null = null

  constructor(opts: any) {
  	super({});
  	const {
  		wechatScript = 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js',
  		wechatSignatureApi = '',
  		wechatDebug = true,
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

  configWechatShare(wechatShare: any) {
  	const {
  		title,
  		imgUrl,
  		desc,
  		link = window.document.URL,
  		success = () => {},
  		cancel = () => {},
  	} = wechatShare;
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
