/* eslint-disable no-param-reassign */

export const lazyload = () => {
  const { clientHeight = 0 } = document.documentElement;
  const covers = document.querySelectorAll('.MuiCardMedia-root[data-src][data-lazyload]');
  if (covers.length) {
    Array.prototype.forEach.call(covers, (item: HTMLElement) => {
      const { src = '' } = item.dataset || {};
      if (!src) {
        return;
      }
      const rect = item.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top < clientHeight) {
        const image = new Image();
        image.onload = () => {
          item.style.backgroundImage = `url(${src})`;
          item.style.backgroundSize = 'cover';
          item.style.backgroundRepeat = 'no-repeat';
          item.style.backgroundPosition = 'center';
          item.style.transition = 'filter .3s';
          item.style.filter = 'blur(1px)';
          setTimeout(() => {
            item.style.filter = 'none';
          }, 300);
          item.removeAttribute('data-src');
          item.removeAttribute('data-lazyload');
        };
        image.src = src;
      }
    });
  }
};
