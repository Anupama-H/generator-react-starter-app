/**
 * Created by ravi.hamsa on 10/8/16.
 */
'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

var glob = require("glob")


module.exports = yeoman.Base.extend({

  writingComponentIndex: function () {

    var self = this;
    var folder = 'src/components/';

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
            content += 'export ' + importName + ' from ".' + fileName + '"\n';
          }

        })

        if (importNames.length > 0) {
          // content += 'export default {' + importNames.join(', ') + '}\n';
          self.fs.write(folder + groupIndex + '/index.js', content);
          self.fs.write(folder + groupIndex + '/package.json', JSON.stringify({
            name: _.upperFirst(groupIndex),
            version: '0.0.0',
            private: true,
            main: './index.js'
          }));

        }
      })
      done();
    })
  },

  writingPageIndex: function () {

    var self = this;
    var folder = 'src/pages/';

    glob(folder + "**/*.js", {}, function (er, files) {

      var content = '/* ***** generated file - do not edit ***** */ \n'
      var importNames = []
      _.each(files, function (fileName) {
        fileName = fileName.substr(folder.length, fileName.length - 3 - folder.length);
        var importName = _.upperFirst(_.camelCase(fileName.replace(/\//g, '-')));
        if(importName !== 'Index'){
          importNames.push(importName);
          content += 'export ' + importName + ' from "./' + fileName + '"\n';
        }

      })
      // content += 'export default {' + importNames.join(', ') + '}';



      self.fs.write(folder + 'index.js', content)
      self.fs.write(folder + '/package.json', JSON.stringify({
        name: 'Pages',
        version: '0.0.0',
        private: true,
        main: './index.js'
      }));
    })
  },

  writeRoutes:function(){

  }

});
