/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const stew = require('broccoli-stew');
const Filter = require('broccoli-filter');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  function MyFilter(inputNode) {
    Filter.call(this, inputNode);
  }

  MyFilter.prototype = Object.create(Filter.prototype);

  MyFilter.prototype.processString = function(existingString) {
    var prepend = `
      /**
      * vendor.js
      *
      * (c) 2016 ️ ️️️️️️☕️️️️☕️️️️🍩🍩 All Rights Reserved
      * generated at: ${new Date()}
      */
     `;
    return prepend + existingString;
  };

  MyFilter.prototype.extensions = ['js'];
  MyFilter.prototype.targetExtension = 'js';

  return new MyFilter(stew.log(app.toTree()));
};
