import React from "react";
import sortup from "./sorting-up.png";
import sortdown from "./sorting-down.png";

const UserTable = props => {
  var count = 0;

  return (
    <table align="center" id="displaystyle" width="100%">
      <tr>
        <td>Sr. No.</td>
        NAME
        <img
          src={sortup}
          alt="sort by accending"
          style={{ height: "13px", width: "13px" }}
          onClick={() => props.onSortingClick("name", "asc")}
        ></img>
        <img
          src={sortdown}
          alt="sort by descending"
          style={{ height: "12px", width: "12px" }}
          onClick={() => props.onSortingClick("name", "desc")}
        ></img>
        <td>
          CONTECT NO.
          <img
            src={sortup}
            alt="sort by accending"
            style={{ height: "13px", width: "13px" }}
            onClick={() => props.onSortingClick("contect", "asc")}
          ></img>
          <img
            src={sortdown}
            alt="sort by descending"
            style={{ height: "12px", width: "12px" }}
            onClick={() => props.onSortingClick("contect", "desc")}
          ></img>
        </td>
        <td>
          NAME OF BANK
          <img
            src={sortup}
            alt="sort by accending"
            style={{ height: "13px", width: "13px" }}
            onClick={() => props.onSortingClick("bankname", "asc")}
          ></img>
          <img
            src={sortdown}
            alt="sort by descending"
            style={{ height: "12px", width: "12px" }}
            onClick={() => props.onSortingClick("bankname", "desc")}
          ></img>
        </td>
        <td>CARD NUMBER</td>
        <td>Profile</td>
      </tr>

      {props.user.map((userobj, id) => {
        return (
          <tr key={id}>
            <td style={{ padding: "10px", width: "5%" }}>{++count}</td>
            <td style={{ width: "25%" }}>{userobj.name}</td>
            <td style={{ width: "20%" }}>{userobj.contect}</td>
            <td style={{ width: "20%" }}>{userobj.bankname}</td>
            <td style={{ width: "20%" }}>{userobj.cardnumber}</td>
            <td style={{ width: "10%" }}>
              <button
                onClick={() => props.onEditUserClick(userobj)}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "10px"
                }}
              >
                Edit
              </button>
              <button
                onClick={() => props.onDeleteUserClick(userobj.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px"
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
      <tr>
        {/* {totalpage.map(pagecount => {
          return <button>{pagecount}</button>;
        })} */}
      </tr>
    </table>
  );
};
export default UserTable;
