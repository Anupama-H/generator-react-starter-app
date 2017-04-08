/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import navController from '../controllers/navController'


export default class Unknown extends Component {
  bumpPageCounter(event) {
    event.preventDefault();
    navController.setPageAttribute('counter', parseInt(this.props.counter) + 1);
  }

  render() {
    return <div>This is Unknown page
      <div>Counter received as a prop {this.props.counter}</div>
      <a href="#" onClick={this.bumpPageCounter.bind(this)}>set counter++</a>
    </div>
  }
}

