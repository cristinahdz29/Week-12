// created reducer function
// set initial value of state to 99

// reducer now ready to be passed in as an argument to createStore function
// in index.js
const initialState = {
    counter: 99
}


const reducer = (state = initialState, action) => {
    // checking if action type is DECREMENT
    if (action.type == 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type == 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type == 'ADD_USER_INPUT') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    } else if (action.type == 'SUBTRACT_USER_INPUT') {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }
    return state
}


export default reducer