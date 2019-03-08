import React from 'react'
import { connect } from 'react-redux'

const Smurfs = (props) => {
  return (
    <div>
      {props.smurfs.map( (smurf, index) => <h1 key={index}>{smurf.name}</h1>  
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurfs)
