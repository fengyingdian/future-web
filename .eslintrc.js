module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'import',
	],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'array-callback-return': 'off',
		'semi': ['error', 'always'],

		'indent': ['off', 'tab'],
		'react/no-unused-state': 'off',

		'radix': 'error',
		'prefer-template': 'error',
		'prefer-const': 'error',
		'prefer-spread': 'error',
		'eqeqeq': ['error', 'always'],

		'default-case': 'error',
		'template-curly-spacing': 'off', // Prettier.
		'consistent-return': 'off', // Flow.
		'newline-before-return': 'error',

		'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreComments': true }],

		'import/no-extraneous-dependencies': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-named-as-default': 'off',
		'import/first': 'off',
		'import/prefer-default-export': 'off',

		'no-var': 'error',
		'no-tabs': 'off',
		'no-const-assign': 'error',
		'no-mixed-spaces-and-tabs': ['off', 'smart-tabs'],
		'no-mixed-operators': ['error', { 'groups': [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']] }],
		'no-return-await': 'off',
		'no-restricted-syntax': 'off',
		'no-underscore-dangle': 'off',
		'no-restricted-globals': 'error',
		'no-useless-escape': 'error',
		'no-unused-vars': 'off',
		'no-console': 'off',
		'no-debugger': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: true },
		],

		'yoda': ['error', 'never', { exceptRange: true }],
		'jsx-a11y/href-no-hash': 'off',
		'react/jsx-props-no-spreading': 'off',
		'global-require': 'off', // Used by webpack isomorphic tools and React Native.
		'quotes': ['error', 'single', { avoidEscape: true }],
		'camelcase': ['error', { allow: ['UNSAFE_componentWillMount'] }],
		'class-methods-use-this': 'off',

		'react/no-unused-prop-types': 'warning',
		'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'always' }],
		'react/display-name': 'off',
		'react/forbid-prop-types': 'off', // using Flow types.
		'react/jsx-closing-bracket-location': 'off', // Prettier.
		'react/jsx-filename-extension': 'off', // JSX belongs to .js files.
		'react/jsx-indent': 'off', // Prettier.
		'react/jsx-indent-props': 'off', // Prettier.
		'react/jsx-wrap-multilines': 'off', // Prettier.
		'react/no-danger': 'off', // Control freaky.
		'react/no-unescaped-entities': 'off', // Prettier.
		'react/no-unused-prop-types': 'off', // Flow.
		'react/prop-types': 'off', // Flow.
		'react/require-default-props': 'off', // Flow.
		'react/jsx-no-bind': 'off',
		'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
		'react/no-array-index-key': 'off',
		'react/state-in-constructor': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-uses-vars': 'off',

		'@typescript-eslint/no-unused-vars': ['off', {
			'vars': 'all',
			'args': 'after-used',
			'ignoreRestSiblings': false
		}]
	},
};
