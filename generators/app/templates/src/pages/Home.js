/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import {core, components} from 'react-starter-components';
const {SmartWrapper, Loader, MessageStack} = core;
const {List, ViewStateManager, ViewState} = components.common;


let categoryListConfig = {
    dataRequests: [
        {
            requestId: 'getListOfSomeItems',
            //propKey defines name of the prop child component expects
            propKey: 'items',
            getParams: function () {
                return {};
            }
        }
    ]
}

let dummyData = [{
    "id": "current_user_url",
    "name": "https://api.github.com/user"
}, {
    "id": "current_user_authorizations_html_url",
    "name": "https://github.com/settings/connections/applications{/client_id}"
}]

export default class Home extends Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="t-right">
                        <a href="/#/login">Login</a>
                        <a href="/#/publisher">Publisher</a>
                        <a href="/#/campaign">Campaign</a>
                    </div>
                </div>
            </div>
            <h1> List with static content </h1>
            <SmartWrapper>
                <List items={dummyData} />
            </SmartWrapper>

            <h1> List with SmartWrapper </h1>
            <SmartWrapper {...categoryListConfig}>
                <List />
            </SmartWrapper>

        </div>
    }
}

