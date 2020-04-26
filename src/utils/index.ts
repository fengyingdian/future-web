declare const navigator: any;

// I dont know if this works, test needed
export const isIEBrowser = +(navigator.userAgent.match(/MSIE (\d+)/) && RegExp.$1);

export { };
