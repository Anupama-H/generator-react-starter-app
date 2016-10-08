/**
 * Created by ravi.hamsa on 8/15/16.
 */

import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import HTML from './components/core/HTML'

const context = {
    insertCss: styles => styles._insertCss(),
    onSetTitle: value => (document.title = value),
}


export default function (component, userDetails){
    return new Promise(resolve => {
        ReactDOM.render(<HTML context={context} pageId={component.props.pageId}
                              userDetails={userDetails}>{component}</HTML>, document.getElementById('app'), resolve);
    });
}
