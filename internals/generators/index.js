const promptDirectory = require('inquirer-directory');
const componentGenerator = require('./component/index.js');

module.exports = plop => {
  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator('component', componentGenerator);
};
