var istanbul = require('browserify-istanbul');
var isparta = require('isparta');
var babelify = require('babelify');

module.exports = function (config) {
    config.set({

        basePath: process.cwd(),

        autoWatch: true,

        frameworks: ['jasmine', 'browserify'],

        reporters: ['progress', 'coverage'],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'js/**/*.js',
            'test/**/*.js'
        ],

        preprocessors: {
            'js/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [
                [ babelify, { presets: ["es2015"] } ],
                istanbul({
                    instrumenter: isparta,
                    ignore: ['**/node_modules/**', '**/test/**']
                })
            ]
        },

        'coverageReporter': {
            dir: 'reports',
            reporters: [
                { type: 'html', subdir: 'html'},
                { type: 'cobertura', subdir: '.'}
            ]
        },

        proxies: {},

        exclude: [],

        port: 8081,

        captureTimeout: 20000,

        browsers: [
            'Chrome'
        ],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-browserify'
        ],

        singleRun: false,

        colors: true,

        logLevel: config.LOG_INFO
    });
};
