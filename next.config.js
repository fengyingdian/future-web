const withcss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
	require.extensions['.css'] = file => { };
}

module.exports = withcss({});

// module.exports = {
// 	exportPathMap() {
// 		return {
// 			'/': { page: '/' },
// 		};
// 	},
// };
