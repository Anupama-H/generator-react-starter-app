/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import {core, components} from 'react-starter-components';
const {SmartWrapper, Loader, MessageStack} = core;
const {List, ViewStateManager, ViewState} = components.common;
const { Form, FormElement, TextInput, TextArea, FileInput, Select, CheckBox, HiddenInput, DatePicker } = components.Form


export default class AdvertiserList extends Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                   Advertiser List <a href="/#/advertiser/create">Create</a>
                </div>
            </div>
        </div>
    }
}

