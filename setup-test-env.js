/* eslint-disable */

// To get normal classnames instead of CSS Modules classnames for testing
require('mock-css-modules');

// Ignore assets
require.extensions['.jpg'] = noop => noop;
require.extensions['.jpeg'] = noop => noop;
require.extensions['.png'] = noop => noop;
require.extensions['.gif'] = noop => noop;

require('babel-register');
require('babel-polyfill');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<body></body>');

global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
