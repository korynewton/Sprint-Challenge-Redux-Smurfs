import React, { Component } from 'react'
import { addSmurf } from '../actions'

import { connect } from 'react-redux'

class AddASmurf extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }


changeHandler = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
 }

 handleAdd = (e) => {
     e.preventDefault()
     this.props.addSmurf(this.state)
     this.setState({
         name: '',
         age: '',
         height: ''
     })
 }

  render() {
    return (
      <div>
          <form onSubmit={this.handleAdd} >
            <input type="text" name="name" placeholder="smurf name" value={this.state.name} onChange={(e) => this.changeHandler(e)}/>
            <input type="number" name="age" placeholder="smurf age" value={this.state.age} onChange={(e) => this.changeHandler(e)}/>
            <input type="text" name="height" placeholder="smurf height" value={this.state.height} onChange={(e) => this.changeHandler(e)}/>
            <button>Submit Smurf</button>
          </form>
      </div>
    )
  }
}

export default connect(null, { addSmurf })(AddASmurf)
