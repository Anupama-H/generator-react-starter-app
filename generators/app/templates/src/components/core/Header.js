/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component, PropTypes} from "react";

class Header extends Component {
    render (){
        return <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <a href="/#/"><i className="fa fa-envira fa-2x" aria-hidden="true"></i></a> by Generator
                    </div>
                </div>
            </div>
        </header>

    }
}

export default Header;