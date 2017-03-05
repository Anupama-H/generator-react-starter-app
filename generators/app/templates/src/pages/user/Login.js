/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {Form, TextInput, SmartWrapper} from 'react-starter-components'
import {Test} from '../../components/user';

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
                        <Test />
                    </div>
                </div>
            </div>
        </div>
    }
}
