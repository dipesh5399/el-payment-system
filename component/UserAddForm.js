import React from "react";

const UserAddForm = props => {
  return (
    <div align="center">
      <table>
        {/* <div>
          <tr style={{ color: "red" }}>{props.errors.nameError}</tr>
          <tr style={{ color: "red" }}>{props.errors.contectError}</tr>{" "}
          <tr style={{ color: "red" }}>{props.errors.banknameError}</tr>
          <tr style={{ color: "red" }}>{props.errors.cardnumberError}</tr>
        </div> */}{" "}
        <tr class="form-group">
          <td>
            <label>Name </label>
          </td>
          <td>
            :{" "}
            <input
              type="text"
              pattern="[A-Za-z]"
              title="Only Alphabatical words excepted."
              value={props.nameKey.name}
              onChange={props.onNameChange}
              style={{ borderRadius: "5px" }}
            />
            <tr style={{ color: "red" }}>{props.errors.nameError}</tr>
          </td>
        </tr>
        <tr class="form-group">
          <td>
            <label>Contact No. </label>
          </td>
          <td>
            :{" "}
            <input
              type="number"
              class="form-control"
              value={props.nameKey.contect}
              onChange={props.onContectChange}
              style={{ borderRadius: "5px" }}
            />{" "}
            <tr style={{ color: "red" }}>{props.errors.contectError}</tr>
          </td>
        </tr>
        <tr class="form-group">
          <td>
            <label>Name Of Bank </label>
          </td>

          <td>
            :{" "}
            {/* <input
              type="text"
              value={props.nameKey.bankname}
              onChange={props.onBankNameChange}
              style={{ borderRadius: "5px" }}
            /> */}
            <select
              value={props.nameKey.bankname}
              onChange={props.onBankNameChange}
              style={{ borderRadius: "5px" }}
              pattern="[A-Za-z]"
              title="Please Select Bank ."
            >
              <option></option>
              <option>ADC</option>
              <option>BOI</option>
              <option>HDFC</option> <option>IndusInd Bank</option>{" "}
              <option>Maharastra Bank</option>
              <option>Panjab Bank</option>
              <option>SBI</option>
              <option>Union</option>
            </select>
            <tr style={{ color: "red" }}>{props.errors.banknameError}</tr>
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
              title="Invalid!Must be in xxxx-xxxx-xxxx-xxxx form."
              pattern="[0-9]-[0-9]-[0-9]-[0-9]"
              value={props.nameKey.cardnumber}
              onChange={props.onCardNumberChange}
              style={{ borderRadius: "5px" }}
            />
            <tr style={{ color: "red" }}>{props.errors.cardnumberError}</tr>
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
