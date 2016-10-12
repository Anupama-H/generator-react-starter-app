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
    this.componentRealName= this.componentNameWithPath.substr(lastIndexOfSlash)
    this.componentName = _.upperFirst(_.camelCase(this.componentRealName));
    this.className=this._getComponentRealFullName().split('/').join('-').toLowerCase();
    this.lessFileName = this.destinationPath('public/css/components/'+this._getComponentRealFullName().toLowerCase()+'.less');
    this.jsFileName ='src/components/'+this._getComponentFullName()+'.js'
  },

  _getComponentFullName:function(){
    var componentFullName = this.componentName;
    if(this.componentPath !== ''){
      componentFullName = this.componentPath+this.componentName;
    }
    return componentFullName;
  },

  _getComponentRealFullName:function(){
    var componentRealName = this.componentRealName;
    if(this.componentPath !== ''){
      componentRealName =  this.componentPath +  this.componentRealName;
    }
    return componentRealName;
  },

  writing: function () {


    this.fs.copyTpl(
      this.templatePath('component.tmpl'),
      this.destinationPath(this.jsFileName),
      { componentName:this.componentName, className:this.className }
    );

    this.fs.write(this.lessFileName, '.'+this.className+' {\n\n}')
  }

});
