import React, { Component } from "react";
import SearchInput from "./SearchInput";
import NewUsers from "./NewUsers";
const getUsers = searchParam => {
  return fetch(
    searchParam
      ? `http://localhost:3005/users?q=${searchParam}`
      : "http://localhost:3005/users"
  ).then(response => {
    return response.json();
  });
};
export default class UserTable extends Component {
  state = {
    search: "",
    items: []
  };
  updatesearch(key) {
    getUsers(key.target.value).then(users =>
      this.setState({
        items: users
      })
    );
  }
  componentDidMount() {
    getUsers().then(users =>
      this.setState({
        items: users
      })
    );
  }
  render() {
    return (
      <React.Fragment>
        <SearchInput
          searchparameter={this.updatesearch.bind(this)}
        ></SearchInput>
        <NewUsers></NewUsers>
        <br></br>
        <hr />
        <table align="center" id="displaystyle">
          <tr id="displayStyleHeader">
            <td>ID</td>
            <td>NAME </td>
            <td>CONTECT NO.</td>
            <td>NAME OF BANK</td>
            <td>CARD NUMBER</td>
            <td>Profile</td>
          </tr>
          {this.state.items.map((userobj, id) => {
            return (
              <tr key={id}>
                <td style={{ padding: "10px", paddingRight: "20px" }}>
                  {userobj.id}
                </td>
                <td style={{ paddingRight: "20px" }}>{userobj.name}</td>
                <td style={{ paddingRight: "20px" }}>{userobj.contect}</td>
                <td style={{ paddingRight: "20px" }}>{userobj.bankname}</td>
                <td style={{ paddingRight: "20px" }}>{userobj.cardnumber}</td>
              </tr>
            );
          })}
        </table>
      </React.Fragment>
    );
  }
}
