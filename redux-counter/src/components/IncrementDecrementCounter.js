import React from 'react'
import { connect } from 'react-redux'
import "../styles/DisplayCounter.css";

function IncrementDecrementCounter(props) {

    
    return (
        <div className="display-div">
            <h2>Increment Decrement Counter</h2>
            <button onClick ={() => props.onDecrement()}>Decrement</button>
            <button onClick={() => props.onIncrement()}>Increment</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onIncrement: () => dispatch({type: 'INCREMENT'})
    }
}

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter)