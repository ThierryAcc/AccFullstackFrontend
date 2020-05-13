import React from 'react';

interface CounterProps {
    name: string;
    buttonLabel: string;
}

interface CounterState {
    counter: number;
}

export default class Counter extends React.Component<CounterProps, CounterState>  {
    constructor(props:any) {
        super(props);
        this.state = {
            counter: 0
        }
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
    }

    add() {
            this.setState({
                counter: this.state.counter+1
            });
    }

    sub() {
        this.setState({
            counter: this.state.counter-1
        });
    }

    render() {
      return <div>
        <h1>Hello, {this.props.name}</h1>
        <button onClick={this.add}>{this.props.buttonLabel}</button>
        <button onClick={this.sub}>-</button>
        <p>{this.state.counter}</p>
      </div>
    }
  }