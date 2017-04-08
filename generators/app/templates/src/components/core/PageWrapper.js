/**
 * Created by ravi.hamsa on 4/7/17.
 */
import React, {Component, PropTypes} from "react";
import navController from '../../controllers/navController';

export default class NavPageContainer extends  Component {

    render(){
        let pageProps = navController.toJSON();
        return React.cloneElement(this.props.children, {...pageProps})
    }
}