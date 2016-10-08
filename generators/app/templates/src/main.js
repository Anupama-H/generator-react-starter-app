/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import {match} from 'universal-router';
import {core} from 'react-starter-components';
import history from 'react-starter-components/lib/core/history'
import routes from './routes';
import requestConfigs from './requests';
import render from './render'




const {dataLoader, utils} = core;

dataLoader.setCommonHeaders({
    'Content-Type': 'application/json',
    'Authorization':'5c8504d6-fd7a-40e2-a1b8-60893b6c28ae'
})

dataLoader.setResponseParser(function(resp){
    let data = null;
    let errors = null
    let warnings = null;

    if(!resp.error_code){
        data=resp;
    }else{
        errors = [{id:resp.error_code, message:resp.msg, type:'error'}];
    }

    if(resp.warning_code){
        warnings = [{id:resp.warning, message:resp.warning, type:'warning'}];
    }

    return {
        data: data,
        errors: errors,
        warnings: warnings
    }
})


for (let requestId in requestConfigs) {
    dataLoader.addResource(requestId, requestConfigs[requestId])
}



function getHashString(location) {
    let hashString = location.hash;
}


function run() {
    // Get the current location
    const location = history.getCurrentLocation()
    // Listen for changes to the current location
    const unlisten = history.listen(location => {
        match(routes, {path: location.hash.substr(1), render});
    })

    console.log(routes, 'routes')
    match(routes, {path: location.hash.substr(1), render});
}


run();
