import React, { useState } from "react";
import { connect } from 'react-redux'
import "../styles/DisplayCounter.css";

function AddSubtractCounter(props) {
  // setting the local state to store value of the textbox
  // providing state with an initial amount of one
  const [userInput, setUserInput] = useState(0);

  // declaring handleChange function
  // Will be called when user types value into text box
  const handleChange = (e) => {
      setUserInput(e.target.valueAsNumber)
  }

  return (
    <div className="display-div">
      <h2>Add Subtract Counter</h2>
      <input
        type="number"
        placeholder="Enter value"
        name="userInput"
        onChange = {handleChange}
        // onChange={ e => setUserInput(e.target.valueAsNumber)}
      ></input>
      <button onClick={() => props.addUserInput(userInput)}>Add</button>
      <button onClick={() => props.subtractUserInput(userInput)}>Subtract</button>
    </div>
  );
}

// Will have dispatch function, give it a type
// Will have 2 dispatches for this, one to add and one to substract, value added in will be the state

const mapDispatchToProps = (dispatch) => {
    return {
        addUserInput: (value) => dispatch({type: 'ADD_USER_INPUT', payload: value}),
        subtractUserInput: (value) => dispatch({type: 'SUBTRACT_USER_INPUT', payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter);
