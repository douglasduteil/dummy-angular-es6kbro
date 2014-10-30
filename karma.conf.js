// Karma configuration
// Generated on Wed 

var es6ify = require('es6ify');
es6ify.traceurOverrides = { 
  annotations : true,
  sourceMaps : true,
  types: true,
  //typeAssertions: true,
  //typeAssertionModule: 'rtts-assert'
};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      { pattern : es6ify.runtime, included : true, watched : false },
      { pattern: 'node_modules/angular/angular.js', included: true, watched : false },
      { pattern: 'node_modules/angular-mocks/angular-mocks.js', included: true, watched : false },

      { pattern: 'node_modules/rtts-assert/dist/es6/assert.js', included: false, watched : false },
      { pattern : 'src/**/*.spec.js', included : false, watched : false }

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'node_modules/rtts-assert/dist/es6/assert.js': [ 'browserify' ],
        'src/**/*.js': [ 'browserify' ],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'es6ify' ]
    }

  });
};
