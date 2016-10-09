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

  _getPageFullName: function(){
    var pageFullName = this.pageName;
    if(this.pagePath !== ''){
      pageFullName = this.pagePath+this.pageName;
    }
    return pageFullName;
  },

  writingComponentIndex: function () {

    var self = this;
    var folder = 'src/components/';
    self.componentString = '';


    var relativePrefix = _.map(_.tail(this._getPageFullName().split('/')), function(){
      return  '../'
    }).join('')

    var done = this.async();


    glob(folder + "**/*.js", {}, function (er, files) {

      var fileGroups = _.groupBy(files, function (fileName) {
        fileName = fileName.substr(folder.length, fileName.length - 3 - folder.length);
        return fileName.substr(0, fileName.indexOf('/'))
      })

      _.each(fileGroups, function (files, groupIndex) {
        var content = '/* ***** generated file - do not edit ***** */ \n'
        var importNames = []



        _.each(files, function (fileName) {
          var suffixLength = folder.length + groupIndex.length;

          fileName = fileName.substr(suffixLength, fileName.length - 3 - suffixLength);
          var lastIndex = fileName.lastIndexOf('/') + 1;
          var lastPart = fileName.substr(lastIndex, suffixLength - lastIndex);
          var restPart = fileName.substr(0, lastIndex)

          var importName = _.upperFirst(_.camelCase(restPart.replace(/\//g, '-'))).replace(/[a-z]/g, '') + _.upperFirst(lastPart);
          if (lastPart !== 'index') {
            importNames.push(importName);
            content += 'import ' + importName + ' from ".' + fileName + '"\n';
          }

        })


        if (importNames.length > 0 && groupIndex !== 'core') {
          self.componentString += 'import {' + importNames.join(', ') + '} from \''+relativePrefix+'../components/'+groupIndex +'\' \n';
        }
      })

        done();
    })
  },

  writing: function () {

    this.log(this.destinationRoot(), this.destinationPath('src/pages/'));
    this.fs.copyTpl(
      this.templatePath('page.tmpl'),
      this.destinationPath('src/pages/'+this._getPageFullName()+'.js'),
      { pageName:this.pageName, componentString:this.componentString }
    );

    this.fs.write(this.destinationPath('public/css/pages/'+this._getPageFullName().toLowerCase()+'.less'), '.'+this._getPageFullName().split('/').join('-').toLowerCase()+' {\n\n}')


  }

});
