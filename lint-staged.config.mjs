/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,jsx,ts.tsx, mjs}': ['prettier --write', 'eslint --fix'],
  '*.{json,md}': ['prettier --write'],
};
