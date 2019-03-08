import React, { Component } from 'react';
import Smurfs  from './Smurfs'
import './App.css';
import { connect } from 'react-redux'
import {fetchSmurfs} from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <Smurfs />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App) ;
