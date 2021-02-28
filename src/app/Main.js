//! Built-in or Third Party Packages

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//! User Files

import { incrementCounter, decrementCounter } from "store/actions";

function Main(props) {
  const { counter, incrementCounter, decrementCounter } = props;
  return (
    <div>
      <p>{counter.count}</p>
      <button onClick={() => incrementCounter()}>Increment</button>
      <button onClick={() => decrementCounter()}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
