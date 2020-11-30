import logo from './logo.svg';
import './App.css';
import DisplayCounter from './components/DisplayCounter';
import { connect } from 'react-redux'
import IncrementDecrementCounter from './components/IncrementDecrementCounter';
import AddSubtractCounter from './components/AddSubtractCounter';
;

function App(props) {
  return (
    <div className="app-div">
      <h1>App Component</h1>
      <h1>{props.count}</h1>
      <DisplayCounter></DisplayCounter>
      <IncrementDecrementCounter></IncrementDecrementCounter>
      <AddSubtractCounter></AddSubtractCounter>
    </div>
  );
}

// implements mapStateToProps function to display values in global state

const mapStateToProps = (state) => {
  return {
    count: state.counter
  }
}

export default connect(mapStateToProps)(App);
