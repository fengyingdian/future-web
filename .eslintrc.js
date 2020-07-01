/*
 * File: .eslintrc.js
 * File Created: Thursday, 12th December 2019 3:34:39 pm
 * Author: ChengCheng Wan <chengcheng.st@gmail.com>
 */

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['airbnb-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/no-unused-vars": "off",
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-restricted-syntax': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': 'off',
    'react/no-array-index-key': 'off',
    'array-callback-return': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-curly-brace-presence': 'off'
  },
};
