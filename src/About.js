import React from "react";

import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div class="container">
        <p>
          Click <span>Add</span> to increase the set value by 1 and{" "}
          <span>Sub</span> to decrease it by 1!
        </p>
        <p>
          Click <span>Reset</span> to restore the incremented or decremented
          value to 0!
        </p>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleAddOne}>Add 1</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleMinusOne}>Subtract 1</button>
      </div>
    );
  }
}

export default Counter;
