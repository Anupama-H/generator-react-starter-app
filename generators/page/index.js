'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var  _ = require('lodash');
var glob = require("glob")

module.exports = yeoman.Base.extend({



  constructor: function () {
    yeoman.Base.apply(this, arguments);
    // This makes `appname` a required argument.
    this.argument('pageNameWithPath', { type: String, required: true, default:'my-page' });
    // And you can then access it later on this way; e.g. CamelCased
    var lastIndexOfSlash =  this.pageNameWithPath.lastIndexOf('/')+1;
    this.pagePath = this.pageNameWithPath.substr(0,lastIndexOfSlash);
    this.pageName = _.upperFirst(_.camelCase(this.pageNameWithPath.substr(lastIndexOfSlash)));
  },

  writingComponentIndex: function () {

    var self = this;
    var folder = 'src/components/';

    var done = this.async();

    glob(folder + "**/*.js", {}, function (er, files) {

      var content = ''
      var importNames = []
      _.each(files, function (fileName) {
        fileName = fileName.substr(folder.length, fileName.length - 3 - folder.length);
        var parts = fileName.split('/');

        var importName = _.upperFirst(_.uniq(parts).join('_'))
        if(importName !=='Index'){
          importNames.push(importName);
          content += 'import ' + importName + ' from "./' + fileName + '"\n';
        }
      })
      content += 'export default {' + importNames.join(', ') + '}';
      self.componentString = 'import {' + importNames.join(', ') + '} from \'../components/index\'';
      done();
    })
  },

  writing: function () {

    var pageFullName = this.pageName;
    if(this.pagePath !== ''){
      pageFullName = this.pagePath+this.pageName;
    }

    this.log(this.destinationRoot(), this.destinationPath('src/pages/'));

    this.fs.copyTpl(
      this.templatePath('page.tmpl'),
      this.destinationPath('src/pages/'+pageFullName+'.js'),
      { pageName:this.pageName, componentString:this.componentString }
    );


  }

});
