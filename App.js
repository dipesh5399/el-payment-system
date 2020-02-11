import React, { Component } from "react";
import "./cssfiles/userTable.css";
import UserTable from "./component/UserTable";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <UserTable />
      </React.Fragment>
    );
  }
}
// let filteredlist = db.users.name.filter(userfiltered => {
//   return (
//     userfiltered.name
//       .toLowerCase()
//       .indexOf(this.state.search.toLowerCase()) !== -1
//   );
// });
// const handleSort = () => {
//   console.log("name button clicked.");
// };
/* <input
placeholder="search"
type="text"
onChange={this.updatesearch.bind(this)}
style={{
  height: "20px",
  witdh: "150px",
  position: "absolute",
  left: "20px"
  // right: "10px"
  // top: "5px"
}}
></input> */
