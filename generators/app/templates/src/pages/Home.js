/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import {core, components} from 'react-starter-components';
const {SmartWrapper, Loader, MessageStack} = core;
const {List, ViewStateManager, ViewState} = components.common;


let categoryListConfig = {
    dataRequests:[
        {
            requestId:'getTier1Categories',
            propKey:'items',
            getParams:function(){
                return {};
            }
        }
    ]
}


export default class Home extends Component {
    render(){
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="t-right">
                        <a href="/#/advertiser">Advertiser</a>
                        <a href="/#/publisher">Publisher</a>
                        <a href="/#/campaign">Campaign</a>
                    </div>
                </div>
            </div>
            <SmartWrapper {...categoryListConfig}>
                <List />
            </SmartWrapper>
        </div>
    }
}

