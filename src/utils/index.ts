
// get userAgent system
export const getSystem = () => {
  const { userAgent: ua } = navigator || {};
  if (/iPhone/.test(ua)) {
    return 'IOS';
  }
  if (/Android/.test(ua)) {
    return 'Android';
  }
  return 'others';
};

export { };
