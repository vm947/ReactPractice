import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    /*imageURL: 'https://picsum.photos/200'
        this generates a random 200 by 200 pic.
        would reference image src as--> src={this.state.imageURL}
        */
  };

  /*constructor(){
     super(); 
     this.handleIncrement = this.handleIncrement.bind(this);
     this is for binding EVENT handlers.
     You can use arrow function and not need to do this.
  };*/

  /*styles = {
        fontSize: 50,
        fontWeight: 'bold'
        WE REFERENCE this.styles as an 
        attribute style-->style={this.styles};
    };*/

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement} //event handlers use function reference, not a function with ()
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
