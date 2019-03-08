import React, { Component } from 'react'

export default class AddASmurf extends Component {
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

  render() {
    return (
      <div>
          <form >
            <input type="text" name="name" placeholder="smurf name" value={this.state.name} onChange={(e) => this.changeHandler(e)}/>
            <input type="number" name="age" placeholder="smurf age" value={this.state.age} onChange={(e) => this.changeHandler(e)}/>
            <input type="text" name="height" placeholder="smurf height" value={this.state.height} onChange={(e) => this.changeHandler(e)}/>
            <button>Submit Smurf</button>
          </form>
        
      </div>
    )
  }
}
