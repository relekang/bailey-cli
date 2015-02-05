#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var resolve = require('resolve');

resolve('bailey', { basedir: process.cwd() }, function(err, baileyPath) {
  if (err) throw err;
  require(path.join(baileyPath.replace(/bailey.js$/, ''), 'src', 'cli'));
});
