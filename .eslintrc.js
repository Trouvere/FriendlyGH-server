module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'comma-dangle': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'consistent-return': 0
  },
  overrides: [
    {
      files: ['*.js']
    }
  ]
};
