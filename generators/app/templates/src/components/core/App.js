/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component, PropTypes} from "react";

class App extends Component {
    render (){
        return <div className='content-body'>
            {this.props.children}
        </div>

    }
}

export default App;