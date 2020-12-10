module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // '@cdab/eslint-config-cdab',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array. Enables eslint-plugin-prettier and
  ],
  plugins: ['jest', 'prettier', '@typescript-eslint', 'react', 'react-hooks', 'react-perf', 'markdown'],
  parserOptions: {
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX,
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true,
  },
}
