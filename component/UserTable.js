import React from "react";

const UserTable = props => {
  var count = 0;
  return (
    <table align="center" id="displaystyle">
      <tr id="displayStyleHeader">
        <td>Sr. No.</td>
        <td>NAME </td>
        <td>CONTECT NO.</td>
        <td>NAME OF BANK</td>
        <td>CARD NUMBER</td>
        <td>Profile</td>
      </tr>

      {props.user.map((userobj, id) => {
        return (
          <tr key={id}>
            <td style={{ padding: "10px", paddingRight: "20px" }}>{++count}</td>
            <td style={{ paddingRight: "20px" }}>{userobj.name}</td>
            <td style={{ paddingRight: "20px" }}>{userobj.contect}</td>
            <td style={{ paddingRight: "20px" }}>{userobj.bankname}</td>
            <td style={{ paddingRight: "20px" }}>{userobj.cardnumber}</td>
            <td>
              <button onClick={() => props.onEditUserClick(userobj)}>
                Edit
              </button>
              <button onClick={() => props.onDeleteUserClick(userobj.id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
export default UserTable;
