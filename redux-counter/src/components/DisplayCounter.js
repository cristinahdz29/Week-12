import React from 'react'
import { connect } from 'react-redux' // connect is a function from react-redux that will allow components to communicate with redux and get access to global store/state
import '../styles/DisplayCounter.css'

function DisplayCounter(props) {
    return (
      <div className="display-div">
        <h2>Display Counter</h2>
        <h2>{props.ctr}</h2>
      </div>
    );
}


// mapStateToProps = function that is the first argument of connect function
// used by component to display values in global state
// passes global state down into the local props of the component
// for value in global state to be displayed when called through props, make sure
// you pass mapStateToProps as an argument to connect function
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)