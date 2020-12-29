module.exports = {
  plugins: ['react', 'prettier', 'react-hooks', 'react-perf'],
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:react-perf/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
