import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        /*imageURL: 'https://picsum.photos/200'
        this generates a random 200 by 200 pic.
        would reference image src as--> src={this.state.imageURL}
        */
    };

    /*styles = {
        fontSize: 50,
        fontWeight: 'bold'
        WE REFERENCE this.styles as an 
        attribute style-->style={this.styles};
    };*/

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  
  formatCount(){
      const {count} = this.state;
      return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
