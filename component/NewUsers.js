import React, { Component } from "react";

export default class NewUsers extends Component {
  render() {
    const handleDialog = () => {
      alert(<input placeholder="Enter Your Name here"></input>);
    };
    return (
      <React.Fragment>
        <button
          onClick={handleDialog}
          style={{
            height: "20px",
            witdh: "150px",
            position: "absolute",
            right: "20px"
          }}
        >
          Add New User
        </button>
      </React.Fragment>
    );
  }
}
