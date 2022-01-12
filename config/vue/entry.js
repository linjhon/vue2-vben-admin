const { configPolyfill } = require('./polyfill');

const { getEnvFn, isProductionFn } = require('../../build/utils');

function configEntry(config) {
  let entry = ['./src/main.ts'];
  entry = configPolyfill(entry);

  const { VUE_APP_USE_MOCK } = getEnvFn();
  // use mock
  if (VUE_APP_USE_MOCK === 'TRUE' && isProductionFn()) {
    entry.unshift('./mock/_util/mock.config.js');
  }
  config.entry = entry;
}

module.exports = {
  configEntry,
};
