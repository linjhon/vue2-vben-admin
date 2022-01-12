/**
 * 兼容ie 10 11
 */
const { supportIeFn } = require('../../build/utils');

function configPolyfill(entry) {
  if (supportIeFn()) {
    entry.unshift(
      ...[
        'core-js/stable',
        'regenerator-runtime/runtime',
        // 'intersection-observer'
      ]
    );
  }
  return entry;
}

module.exports = { configPolyfill };
