import React from "react";

const UserAddForm = props => {
  return (
    <div align="center">
      <table>
        <tr class="form-group">
          <td>
            <label>Name :</label>
          </td>
          <td>
            <input
              type="text"
              value={props.nameKey.name}
              onChange={props.onNameChange}
            />
          </td>
        </tr>
        <tr class="form-group">
          <td>
            <label>Contact No. :</label>
          </td>
          <td>
            <input
              type="number"
              class="form-control"
              pattern="[0-9]"
              value={props.nameKey.contect}
              onChange={props.onContectChange}
            />
          </td>
        </tr>
        <tr class="form-group">
          <td>
            <label>Name Of Bank :</label>
          </td>
          <td>
            <input
              type="text"
              value={props.nameKey.bankname}
              onChange={props.onBankNameChange}
            />
          </td>
        </tr>
        <tr class="form-group">
          <td>
            <label>Card Number :</label>
          </td>
          <td>
            <input
              type="text"
              value={props.nameKey.cardnumber}
              onChange={props.onCardNumberChange}
            />
          </td>
        </tr>
        <tr>
          <button type="submit" onClick={props.onClick}>
            Submit
          </button>
          <button type="Cancel" onClick={props.onCloseClick}>
            Cancel
          </button>
        </tr>
      </table>
    </div>
  );
};
export default UserAddForm;
