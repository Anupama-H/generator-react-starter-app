/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import {core, components} from 'react-starter-components';
import simpleForm  from '../../components/simpleForm';
const {SmartWrapper, Loader, MessageStack} = core;
const {List, ViewStateManager, ViewState} = components.common;
const {Form, FormElement, SimpleCheckbox, SimpleElement, SimpleSelect, SimpleInput, SimpleTextArea} = simpleForm;


export default class AdvertiserCreate extends Component {
    render() {
        return <div>
            <div className="page-title"><i className="fa fa-user-plus" aria-hidden="true"></i> Create Advertiser</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Form className="form-horizontal">
                            <div className="element-group">
                                <h5 className="form-sub-title">Account Information</h5>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Display Name</div>
                                    <div className="col-md-4"><SimpleInput name="name"
                                                                           placeholder="Enter Display Name"/></div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">User Id</div>
                                    <div className="col-md-4"><SimpleInput name="userId" placeholder="Enter User ID"/>
                                    </div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Password</div>
                                    <div className="col-md-4"><SimpleInput name="password" type="password"
                                                                           placeholder="Enter Password"/></div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Verify Password</div>
                                    <div className="col-md-4"><SimpleInput name="password" type="password"
                                                                           placeholder="Verify Password"/></div>
                                </div>
                            </div>

                            <div className="element-group">
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Demand Type</div>
                                    <div className="col-md-4"><SimpleSelect name="demandType"/></div>
                                </div>
                            </div>


                            <div className="element-group">
                                <h5 className="form-sub-title">Contact Information </h5>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">IM</div>
                                    <div className="col-md-4"><SimpleInput name="im" placeholder="Enter IM"/></div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Email</div>
                                    <div className="col-md-4"><SimpleInput name="email" placeholder="Enter Email"/>
                                    </div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Contact Number</div>
                                    <div className="col-md-4"><SimpleInput name="contact_number"
                                                                           placeholder="Enter Contact Number"/></div>
                                </div>
                            </div>

                            <div className="element-group">
                                <h5 className="form-sub-title">Company Information </h5>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Company Name</div>
                                    <div className="col-md-4"><SimpleInput name="company_name"
                                                                           placeholder="Enter Company Name"/></div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Company Address</div>
                                    <div className="col-md-4"><SimpleTextArea name="company_address"
                                                                              placeholder="Enter Company Address"/>
                                    </div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">City</div>
                                    <div className="col-md-4"><SimpleInput name="city" placeholder="Enter City"/></div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Country</div>
                                    <div className="col-md-4"><SimpleSelect name="country"/></div>
                                </div>
                            </div>

                            <div className="element-group">
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary">Create</button>
                                    </div>
                                    <div className="col-md-6 t-right">
                                        <button className="btn">Cancel</button>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    }
}

