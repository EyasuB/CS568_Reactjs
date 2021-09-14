import React from 'react';

const Errorcomponent = () => <div> {props.unknown}</div>;
export default class Counter extends React.Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
      Initializing: true
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      };
    }
    return null;
  }
  componentDidMount() {
    console.log('Component Did Mount');
    console.log('--------------');
    setTimeout(() => {
      this.setState({ Initializing: false });
    }, 500);
    this.state.INit;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(' Should Component Update');
    console.log('---------------');
    if (
      nextProps.ignoreProp &&
      this.state.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('should Component Update?- Do not render ');
      console.log('-----------------');
      return false;
    }
    console.log('Should component Update- Render');
    console.log('-------------------');
    return true;
  }
  // allows us to
  getSnapshotbeforeUpdate(prevProps, prevState) {
    console.log('Get get Snapshot beforeUpdate');
    return null;
  }
  render() {
    console.log('render');
    if (this.state.error) {
      return (
        <div> We have encountered an error!{this.state.error.message}</div>
      );
    }
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did Update');
  }
  componentWillUnmount() {
    console.log('Component will Unmount');
    console.log('..............');
  }
  componentDidCatch(error, info) {
    console.log('Component did catch');
    this.setState({});
  }
}
