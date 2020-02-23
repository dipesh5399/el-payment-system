import React from "react";
import sortup from "./sorting-up.png";
import sortdown from "./sorting-down.png";
import "../cssfiles/userTable.css";
const UserTable = props => {
  var count = 0;

  return (
    <table align="center" id="displaystyle" width="100%">
      <tr id="header">
        <td>Sr. No.</td>
        NAME
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
        <td>
          CONTECT NO.
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
        </td>
        <td>
          NAME OF BANK
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
        </td>
        <td>CARD NUMBER</td>
        <td>Profile</td>
      </tr>

      {props.user.map((userobj, id) => {
        return (
          <tr key={id}>
            <td >{++count}</td>
            <td >{userobj.name}</td>
            <td >{userobj.contect}</td>
            <td >{userobj.bankname}</td>
            <td >{userobj.cardnumber}</td>
            <td >
              <button
                onClick={() => props.onEditUserClick(userobj)}
                id="editbtn"             
              >
                Edit
              </button>
              <button
                onClick={() => props.onDeleteUserClick(userobj.id)}
                id="deletebtn"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
      <tr>
      </tr>
    </table>
  );
};
export default UserTable;
