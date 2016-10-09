'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var  _ = require('lodash');

module.exports = yeoman.Base.extend({



  constructor: function () {
    yeoman.Base.apply(this, arguments);
    // This makes `appname` a required argument.
    this.argument('componentNameWithPath', { type: String, required: true, default:'my-component' });
    // And you can then access it later on this way; e.g. CamelCased
    var lastIndexOfSlash =  this.componentNameWithPath.lastIndexOf('/')+1;
    this.componentPath = this.componentNameWithPath.substr(0,lastIndexOfSlash);
    this.componentName = _.upperFirst(_.camelCase(this.componentNameWithPath.substr(lastIndexOfSlash)));
  },

  writing: function () {

    var componentFullName = this.componentName;
    if(this.componentPath !== ''){
      componentFullName = this.componentPath+this.componentName;
    }


    this.fs.copyTpl(
      this.templatePath('component.tmpl'),
      this.destinationPath('src/components/'+componentFullName+'.js'),
      { componentName:this.componentName }
    );

    this.fs.write(this.destinationPath('public/css/components/'+componentFullName.toLowerCase()+'.less'), '.'+componentFullName.split('/').join('-').toLowerCase()+' {\n\n}')
  }

});
