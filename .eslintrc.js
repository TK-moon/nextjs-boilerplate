module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@next/next/no-img-element': 'off',
    '@next/next/no-sync-scripts': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '__dirname',
      },
    },
  },
};
