declare const navigator: any;

// I dont know if this works, test needed
export const isIEBrowser = document.documentMode || +(navigator.userAgent.match(/MSIE (\d+)/) && RegExp.$1);

export { };
