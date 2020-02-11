import React, { Component } from "react";
import offbulb from "./offbulb.jpg";
import onbulb from "./onbulb.jpg";

export default class Myswitchwithpropsandclass extends Component {
  state = {
    currentstate: this.props.isOn
  };
  render() {
    const handleClick = () => {
      console.log(`img clicked. ${this.props.isOn} `);
      this.setState({
        currentstate: !this.props.isOn
      });
    };
    return (
      <React.Fragment>
        <img
          src={this.props.isOn ? onbulb : offbulb}
          alt="423423"
          height="200px"
          width="100px"
          onClick={handleClick}
        />
        <h1>{`Click to ${this.props.isOn ? "off" : "on"} bulb`}</h1>
      </React.Fragment>
    );
  }
}
