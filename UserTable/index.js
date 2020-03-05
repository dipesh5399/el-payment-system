import React from "react";

import * as Bootstrap from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

import "../UserTable/userTable.css";

//import { Router } from "react-router-dom";
const UserTable = props => {
  var count = 0;
  return props.user.length === 0 ? (
    <div align="center" style={{ columnSpan: 7 }}>
      <h4>No Data Available.</h4>
    </div>
  ) : (
    <Bootstrap.Table responsive align="center">
      <thead>
        <tr id="header">
          <th scope="col">Sr. No.</th>
          <th scope="col">
            {" "}
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
          <th scope="col">
            CONTECT NO.
            {"    "}
            <Icons.ArrowUp
             
              size={25}
              onClick={() => props.onSortingClick("contect", "asc")}
            ></Icons.ArrowUp>
            <Icons.ArrowDown
              
              size={25}
              onClick={() => props.onSortingClick("contect", "desc")}
            ></Icons.ArrowDown>
          </th>
          <th scope="col">
            BANK
            {"    "}
            <Icons.ArrowUp
             
              size={25}
              onClick={() => props.onSortingClick("bankname", "asc")}
            ></Icons.ArrowUp>
            <Icons.ArrowDown
              
              size={25}
              onClick={() => props.onSortingClick("bankname", "desc")}
            ></Icons.ArrowDown>
          </th>
          <th scope="col">CARD NUMBER</th>
          <th scope="col">Payment</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody id="displaystyle">
        {props.user.map((userobj, id) => {
          return (
            <tr
              key={id}
              style={{
                borderTop: "1px solid",
                borderColor: "rgb(174, 172, 213)"
              }}
            >
              <td>{++count}</td>
              <td>{userobj.name}</td>
              <td>{userobj.contect}</td>
              <td>{userobj.bankname}</td>
              <td>{userobj.cardnumber}</td>
              <td>
                <Bootstrap.Button
                  id="paymentbtn"
                  size="sm"
                  onClick={() => props.onPaymentCall(userobj)}
                >
                  Payment
                </Bootstrap.Button>
              </td>
              <td>
                <Icons.Pencil
                  onClick={() => props.onEditUserClick(userobj)}
                  color="royalblue"
                  size={25}
                  id="btn"
                ></Icons.Pencil>
                {"  "}
                {"/"}
                {"  "}
                <Icons.Trash
                  onClick={() => props.onDeleteUserClick(userobj.id)}
                  id="btn"
                  color="red"
                  size={25}
                  alt="Delete Icon"
                ></Icons.Trash>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Bootstrap.Table>
  );
};
export default UserTable;
