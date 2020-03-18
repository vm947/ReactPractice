import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //event handlers use function reference, not a function with ()
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

/*imageURL: 'https://picsum.photos/200'
        this generates a random 200 by 200 pic.
        would reference image src as--> src={this.state.imageURL}
        */

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
