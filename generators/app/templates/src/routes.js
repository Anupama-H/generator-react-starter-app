/**
 * Created by ravi.hamsa on 7/23/16.
 */
import React, {Component, PropTypes} from "react";
import {Home, Unknown, UserLogin} from "./pages";
import PageWrapper from './components/core/PageWrapper';
import navController from './controllers/navController';
import render from "./render";
import _ from 'lodash';


const parseParams = function (location) {
  let pageId = location.params.pageId || 'home';
  let str = location.params.attributes;
  let paramsObj = {};
  if (str) {
    let paramsStrings = str.split(';');
    paramsStrings.forEach(function (item) {
      let itemParts = item.split('=');
      let key = itemParts[0];
      let value = itemParts[1];
      paramsObj[key] = value;
    })
  }
  paramsObj.pageId = pageId;
  return paramsObj;
}

const pageIdMaps = {
  'home': Home,
  'unknown': Unknown,
  'login': UserLogin
}

const pageDefaultMaps = {
  'unknown': {counter: 10}
}

let actionFunction = (location) => {
  let pageAttributes = {...parseParams(location)};
  let {pageId} = pageAttributes;
  let pageDefaults = pageDefaultMaps[pageId] || {}
  let PageComponent = pageIdMaps[pageId] || Unknown;
  pageDefaults = _.extend({}, pageDefaults, pageAttributes);
  navController.readPageAttributes(pageDefaults);
  return <PageWrapper pageDefaults={pageDefaults} pageId={pageId}><PageComponent /></PageWrapper>
}

export default {
  path: '/',
  async action({next}) {
    const component = await next();
    let userDetails = {};
    if (component !== undefined && component !== null) {
      return render(component, userDetails);
    } else {
      return render(<Unknown pageId="unknown"/>, userDetails);
    }
  },
  children: [
    {
      path: '/',
      action: actionFunction
    },
    {
      path: '/:pageId',
      action: actionFunction
    },
    {
      path: '/:pageId/:attributes',
      action: actionFunction
    }
  ]
};
