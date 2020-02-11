import React, { Component } from "react";

export default class SearchInput extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="search"
          type="text"
          onChange={this.props.searchparameter}
          style={{
            height: "20px",
            witdh: "150px",
            position: "absolute",
            left: "20px"
          }}
        ></input>
      </div>
    );
  }
}
