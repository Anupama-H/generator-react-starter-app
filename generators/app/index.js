'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  config: function() {
    this.config.set('testing', false);
    this.config.save();
  },


  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );

    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copy(
      this.templatePath('app.js'),
      this.destinationPath('app.js')
    );

    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );

    this.fs.copy(
      this.templatePath('public'),
      this.destinationPath('public')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
