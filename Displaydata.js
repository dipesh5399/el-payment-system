import React, { Component } from "react";
import db from "./database/db";
//import Pagination from "react-js-pagination";
import "./displaydata.css";

export default class Displaydata extends Component {
  state = {
    search: ""
  };
  updatesearch(key) {
    this.setState({ search: key.target.value.substr() });
  }
  render() {
    let filteredlist = db.users.filter(userfiltered => {
      return (
        userfiltered.name
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <React.Fragment>
        <input
          placeholder="search"
          type="text"
          onChange={this.updatesearch.bind(this)}
          style={{ height: "25px", witdh: "100px", paddingRight: "50px" }}
        ></input>
        <table align="center" id="displaystyle">
          <tr id="displaystyleheader">
            <td>ID</td>
            <td>
              NAME <button>sort</button>
            </td>
            <td>CONTECT NO.</td>
            <td>NAME OF BANK</td>
            <td>CARD NUMBER</td>
          </tr>
          {filteredlist.map((userobj, id) => {
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
          <tr></tr>
        </table>
        {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage="5"
          totalItemsCount="8"
          onChange={this.handlePageChange}
        /> */}
      </React.Fragment>
    );
  }
}
