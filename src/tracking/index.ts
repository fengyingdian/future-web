import { getSystem } from '../utils/index';

function Zhuge() {
  this.opts = {
    system: '',
  };

  this.system = () => {
    if (!this.opts.system) {
      this.opts.system = getSystem();
    }
    return this.opts.system;
  };

  this.error = (code = 0, message = '', details = '') => {
    if (window && window.zhuge) {
      window.zhuge.track('fabulous/error', {
        code,
        message,
        details,
      });
    }
  };

  this.tracking = (name: string, attributions: any = {}) => {
    if (window && window.zhuge) {
      window.zhuge.track(name, {
        ...attributions,
        system: this.system(),
      });
    }
  };

  this.enter = () => this.tracking('fabulous/enter');
}

const tracking = new Zhuge();

export default tracking;


