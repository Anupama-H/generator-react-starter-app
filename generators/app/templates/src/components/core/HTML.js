/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import App from './App';



export default class HTML extends Component {
    render() {
        return <div>
            <div className="page-wrap">
                <Header></Header>
                <div className="bread-crumb">Breadcrumb</div>
                <App pageId={this.props.pageId}>
                    {this.props.children}
                </App>
            </div>
            <Footer></Footer>
        </div>
    }
}