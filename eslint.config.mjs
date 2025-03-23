import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import testingLibrary from 'eslint-plugin-testing-library';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.config({
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react-native/all',
        'plugin:prettier/recommended',
      ],
    }),
  ),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      react: fixupPluginRules(react),
      'react-native': fixupPluginRules(reactNative),
      'react-hooks': fixupPluginRules(reactHooks),
      prettier: fixupPluginRules(prettier),
      promise: fixupPluginRules(promise),
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Prettier
      'prettier/prettier': ['error'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    // TypeScript specific rules
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/typedef': [
        'error',
        {
          arrayDestructuring: false,
          arrowParameter: false,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          parameter: false,
          propertyDeclaration: true,
          variableDeclaration: false,
        },
      ],
    },
  },
  {
    // Configuration for Node.js script files
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-commonjs': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  {
    // Common rules for all files
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.mjs'],
    rules: {
      // Import sorting (already defined above, no need to repeat)

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/require-default-props': 'off', //Typescript help us handle this
      'react/jsx-key': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/forbid-prop-types': ['warn', { forbid: ['any', 'array', 'object'] }],

      // React Native
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'react-native/sort-styles': 'error',
      'react-native/no-raw-text': 'off',
      'react-native/no-unused-styles': 'off', //Because it's not working properly with the theme system

      // General Code Quality
      'no-console': 'error',
      'no-debugger': 'error',
      complexity: ['error', { max: 10 }],
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],

      // Promise plugin rules
      'promise/always-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/catch-or-return': 'error',
      'promise/no-native': 'off',
      'promise/no-nesting': 'warn',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'promise/avoid-new': 'warn',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'warn',
      'promise/valid-params': 'warn',

      // Prettier (already defined above, no need to repeat)
    },
  },
  {
    // Add specific rules for test files
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx', '**/__tests__/**'],
    plugins: {
      jest: fixupPluginRules(jest),
      'testing-library': fixupPluginRules(testingLibrary),
    },
    rules: {
      // Include rules from jest recommended and style configs
      ...jest.configs.recommended.rules,
      ...jest.configs.style.rules,
      // Include rules from testing-library react config
      ...testingLibrary.configs.react.rules,

      // Jest specific rules
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error',
      'jest/expect-expect': 'error',
      'jest/no-conditional-expect': 'error',
      'jest/no-standalone-expect': 'error',
      'jest/no-done-callback': 'error',
      'jest/prefer-expect-resolves': 'warn',
      'jest/prefer-lowercase-title': ['warn', { ignore: ['describe'] }],

      // Testing Library specific rules
      'testing-library/await-async-queries': 'error',
      'testing-library/no-await-sync-queries': 'error',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-manual-cleanup': 'error',
      'testing-library/prefer-explicit-assert': 'warn',
      'testing-library/prefer-presence-queries': 'error',
      'testing-library/prefer-query-by-disappearance': 'error',
      'testing-library/prefer-screen-queries': 'error',
      'testing-library/render-result-naming-convention': 'error',

      // Disable certain rules for test files
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
