// Import ESLint's recommended configs
import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Base ESLint configuration
  js.configs.recommended,

  {
    files: ['problems/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double'], // Use double quotes but allow escape
      'no-unused-vars': 'warn',
      'no-console': 'off', // Allow console logs for Quokka debugging
      'prefer-const': 'warn',
    },
  },

  // Jest-specific rules for test files
  {
    files: ['problems/**/*.test.js'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
];
