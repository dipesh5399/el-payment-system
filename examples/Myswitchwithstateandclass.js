// import React, { Component } from "react";
// import offbulb from "./offbulb.jpg";
// import onbulb from "./onbulb.jpg";

// export default class Myswitchwithstateandclass extends Component {
//   state = {
//     isOn: true,
//     src: offbulb,
//     change: "Click to on bulb"
//   };
//   handleClick = isOn => {
//     if (isOn === true) {
//       this.setState({
//         isOn: false,
//         src: onbulb,
//         change: "Click to off bulb"
//       });
//       console.log("bulb is on now.");
//     } else {
//       this.setState({
//         isOn: true,
//         src: offbulb,
//         change: "Click to on bulb"
//       });
//       console.log("bulb is off now.");
//     }
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <img src={this.state.src} alt="" height="200px" width="100px"></img>
//         <button
//           onClick={this.handleClick.bind(
//             this,
//             this.state.isOn,
//             this.state.src,
//             this.state.change
//           )}
//         >
//           {this.state.change}
//         </button>
//       </React.Fragment>
//     );
//   }
// }
import React, { Component } from "react";
import offbulb from "./offbulb.jpg";
import onbulb from "./onbulb.jpg";

export default class Myswitchwithstateandclass extends Component {
  state = { isOn: false };
  handleClick = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  };
  render() {
    return (
      <React.Fragment>
        <img
          src={this.state.isOn ? onbulb : offbulb}
          alt="423423"
          height="200px"
          width="100px"
          onClick={this.handleClick}
        />
        <h1>{`Click to ${this.state.isOn ? "off" : "on"} bulb`}</h1>
      </React.Fragment>
    );
  }
}
