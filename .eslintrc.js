module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks', 'react-perf'],
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:react-perf/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX,
    },
  },
  rules: {
    // Allow Prettier to throw errors via ESLint
    'no-console': 'warn',
    semi: ['error', 'never'],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
