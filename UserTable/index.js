import React from "react";
import { Link } from "react-router-dom";

import "../UserTable/userTable.css";

import * as BT from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

const UserTable = props => {
  var count = 0;

  return props.user.length === 0 ? (
    <div align="center" style={{ columnSpan: 7 }}>
      <h4>No Data Available.</h4>
    </div>
  ) : (
    <BT.Container>
    <div class="limiter">
      <div class="table100 ver3 m-b-110">
        {/* <div class="table100-head">
          <table class="table table-hover table-borderless">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>
                  NAME
                  {"    "}
                  <Icons.ArrowUp
                    size={25}
                    onClick={() => props.onSortingClick("name", "asc")}
                  ></Icons.ArrowUp>
                  <Icons.ArrowDown
                    size={25}
                    onClick={() => props.onSortingClick("name", "desc")}
                  ></Icons.ArrowDown>
                </th>
                <th>
                  Phone
                  <Icons.ArrowUp
                    size={25}
                    onClick={() => props.onSortingClick("contect", "asc")}
                  ></Icons.ArrowUp>
                  <Icons.ArrowDown
                    size={25}
                    onClick={() => props.onSortingClick("contect", "desc")}
                  ></Icons.ArrowDown>
                </th>
                <th>
                  BANK
                  <Icons.ArrowUp
                    size={25}
                    onClick={() => props.onSortingClick("bankname", "asc")}
                  ></Icons.ArrowUp>
                  <Icons.ArrowDown
                    size={25}
                    onClick={() => props.onSortingClick("bankname", "desc")}
                  ></Icons.ArrowDown>
                </th>
                <th>User Email ID</th>
                <th>Payment</th>
                <th>Profile</th>
              </tr>
            </thead>
          </table>
        </div> */}

        <div class="table100-body">
          <table style={{ tableLayout: "fixed" }} class="table table-hover table-borderless">
          <thead>
              <tr>
                <th>Sr. No.</th>
                <th>
                  NAME
                  {"    "}
                  <Icons.ArrowUp
                    size={25}
                    onClick={() => props.onSortingClick("name", "asc")}
                  ></Icons.ArrowUp>
                  <Icons.ArrowDown
                    size={25}
                    onClick={() => props.onSortingClick("name", "desc")}
                  ></Icons.ArrowDown>
                </th>
                <th>
                  Phone
                  <Icons.ArrowUp
                    size={25}
                    onClick={() => props.onSortingClick("contect", "asc")}
                  ></Icons.ArrowUp>
                  <Icons.ArrowDown
                    size={25}
                    onClick={() => props.onSortingClick("contect", "desc")}
                  ></Icons.ArrowDown>
                </th>
                <th>
                  BANK
                  <Icons.ArrowUp
                    size={25}
                    onClick={() => props.onSortingClick("bankname", "asc")}
                  ></Icons.ArrowUp>
                  <Icons.ArrowDown
                    size={25}
                    onClick={() => props.onSortingClick("bankname", "desc")}
                  ></Icons.ArrowDown>
                </th>
                <th colSpan="2">Email ID</th>
                <th>Payment</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              
              {props.user.map((userobj, id) => {
                return (
                  <tr key={id}>
                    <td >{++count}</td>
                    <td >{userobj.name}</td>
                    <td >{userobj.contect}</td>
                    <td >{userobj.bankname}</td>
                    <td colSpan="2">
                      {userobj.Email}
                    </td>
                    <td>
                      {/* <Bootstrap.Button
                    size="sm"
                    onClick={() => props.onPaymentCall(userobj)}
                link to={"/Payment"}  > */}
                      <Link to={"/Payment"}>Payment</Link>
                      {/* </Bootstrap.Button> */}
                    </td>
                    <td>
                      <BT.Button variant="link">
                        {" "}
                        <Icons.Pencil
                          onClick={() => props.onEditUserClick(userobj)}
                          color="royalblue"
                          size={25}
                        ></Icons.Pencil>
                      </BT.Button>

                      {"/"}

                      <BT.Button variant="link">
                        {" "}
                        <Icons.Trash
                          onClick={() => props.onDeleteUserClick(userobj.id)}
                          color="red"
                          size={25}
                          alt="Delete Icon"
                        ></Icons.Trash>
                      </BT.Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </BT.Container>
  );
};
export default UserTable;
