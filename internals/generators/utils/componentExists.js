/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const pageComponents = fs.readdirSync(path.join(__dirname, '../../../src'));

function componentExists(comp) {
  return pageComponents.indexOf(comp) >= 0;
}

module.exports = componentExists;
