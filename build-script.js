const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-element/runtime.js',
    './dist/angular-element/polyfills.js',
    './dist/angular-element/main.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/angular-element.js');
})()
