import React from "react";

const UserEditForm = props => {
  return (
    <div align="center">
      <form>
        <table>
          <tr class="form-group">
            <td>
              <label>Name </label>
            </td>
            <td>
              :{" "}
              <input
                value={props.nameKey.name}
                onChange={props.onNameChange}
                style={{ borderRadius: "5px" }}
              />
            </td>
          </tr>
          <tr class="form-group">
            <td>
              <label>Contact No. </label>
            </td>
            <td>
              :{" "}
              <input
                type="text"
                class="form-control"
                value={props.nameKey.contect}
                onChange={props.onContectChange}
                style={{ borderRadius: "5px" }}
              />
            </td>
          </tr>
          <tr class="form-group">
            <td>
              <label>Name Of Bank </label>
            </td>
            <td>
              :{" "}
              <select
                value={props.nameKey.bankname}
                onChange={props.onBankNameChange}
                style={{ borderRadius: "5px" }}
              >
                <option>ADC</option>
                <option>BOI</option>
                <option>HDFC</option> <option>IndusInd Bank</option>
                <option>Maharastra Bank</option>
                <option>Panjab Bank</option>
                <option>SBI</option>
                <option>Union</option>
              </select>
            </td>
          </tr>
          <tr class="form-group">
            <td>
              <label>Card Number </label>
            </td>
            <td>
              :{" "}
              <input
                type="text"
                class="form-control"
                value={props.nameKey.cardnumber}
                onChange={props.onCardNumberChange}
                style={{ borderRadius: "5px" }}
              />
            </td>
          </tr>
          <tr>
            <button onClick={props.onClick}>Submit</button>
            <button type="Cancel" onClick={props.onCloseClick}>
              Cancel
            </button>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default UserEditForm;
