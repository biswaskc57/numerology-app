module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import', 'react-hooks'],
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // Optional, helps resolve types even when not explicitly imported
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js or Vercel projects
      'react/prop-types': 'off', // Not needed with TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          'alphabetize': { order: 'asc', caseInsensitive: true },
        },
      ],
      'react-hooks/rules-of-hooks': 'error', // Checks the rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  };
  