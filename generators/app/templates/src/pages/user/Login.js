/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {core as starterCore, components as starterComponents} from 'react-starter-components';
import Selection from 'selection-manager';
import navigate from 'react-starter-components/lib/core/navigate'

const {dataLoader, SmartWrapper, Loader, MessageStack} = starterCore;
const {Form, TextInput, Select, FormElement} = starterComponents.Form;
const {ViewStateManager, ViewState, List, ListItem} = starterComponents.common;


export default class Login extends SmartWrapper {
    formSubmitHandler(dataObject){
        console.log('do something with dataObject', dataObject);
    }

    render(){
        return <div className="user-login">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>User Login Page</h1>
                        <Form onSubmitHandler={this.formSubmitHandler.bind(this)}>
                            <TextInput name="userName" placeholder="Enter User Name" label="User Name" type="text" validations={[{expr:'req'}]}/>
                            <TextInput name="password" placeholder="Enter Password" label="Password" type="password"  validations={[{expr:'req', message:'Password is Required'}]}/>
                            <button className="btn btn-primary">Login</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    }
}
