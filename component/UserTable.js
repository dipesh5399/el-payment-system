import React from "react";

import sortup from "../images/sorting-up.png";
import sortdown from "../images/sorting-down.png";
import edit from "../images/useredit.jpg";
import userdelete from "../images/delete.png";

import "../cssfiles/userTable.css";

import * as Bootstrap from "react-bootstrap";
//import { Router } from "react-router-dom";
const UserTable = props => {
  var count = 0;
  return props.user.length === 0 ? (
    <div align="center" style={{ columnSpan: 7 }}>
      <h4>No Data Available.</h4>
    </div>
  ) : (
    <Bootstrap.Table responsive align="center" id="tableStyle">
      <thead>
        <tr id="header">
          <th>Sr. No.</th>
          <th>
            {" "}
            NAME
            {"    "}
            <img
              src={sortup}
              alt="sort by accending"
              id="sortupimg"
              onClick={() => props.onSortingClick("name", "asc")}
            ></img>
            <img
              src={sortdown}
              alt="sort by descending"
              id="sortdownimg"
              onClick={() => props.onSortingClick("name", "desc")}
            ></img>
          </th>
          <th>
            CONTECT NO.
            {"    "}
            <img
              src={sortup}
              id="sortupimg"
              alt="sort by accending"
              onClick={() => props.onSortingClick("contect", "asc")}
            ></img>
            <img
              src={sortdown}
              alt="sort by descending"
              id="sortdownimg"
              onClick={() => props.onSortingClick("contect", "desc")}
            ></img>
          </th>
          <th>
            NAME OF BANK
            {"    "}
            <img
              src={sortup}
              alt="sort by accending"
              id="sortupimg"
              onClick={() => props.onSortingClick("bankname", "asc")}
            ></img>
            <img
              src={sortdown}
              alt="sort by descending"
              id="sortdownimg"
              onClick={() => props.onSortingClick("bankname", "desc")}
            ></img>
          </th>
          <th>CARD NUMBER</th>
          <th>Payment</th>
          <th>Profile</th>
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
                <button id="paymentbtn" onClick={() => props.onPaymentCall()}>
                  Payment
                </button>
              </td>
              <td>
                <img
                  onClick={() => props.onEditUserClick(userobj)}
                  id="editbtn"
                  src={edit}
                  alt="edit "
                ></img>
                {"  "}
                {"/"}
                {"  "}
                <img
                  onClick={() => props.onDeleteUserClick(userobj.id)}
                  id="deletebtn"
                  src="/images/delete.png"
                  alt="Delete Icon"
                ></img>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Bootstrap.Table>
  );
};
export default UserTable;
