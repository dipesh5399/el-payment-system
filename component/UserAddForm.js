import React from "react";
import "../cssfiles/UserAddForm.css";
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
              name="name"
              title="Only Alphabatical words excepted."
              value={props.nameKey.name}
              onChange={props.onChange}
              id="tdstyle"
            />
            <tr id="tr">{props.errors.nameError}</tr>
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
              name="contect"
              value={props.nameKey.contect}
              onChange={props.onChange}
              id="tdstyle"
            />{" "}
            <tr id="tr">{props.errors.contectError}</tr>
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
              onChange={props.onChange}
              id="tdstyle"
              name="bankname"
              pattern="[A-Za-z]"
              title="Please Select Bank ."
            >
              <option></option>
              <option>ADC</option>
              <option>BOI</option>
              <option>HDFC</option> <option>IndusLand Bank</option>{" "}
              <option>Maharastra Bank</option>
              <option>Punjab Bank</option>
              <option>SBI</option>
              <option>UBI</option>
            </select>
            <tr id="tr">{props.errors.banknameError}</tr>
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
              name="cardnumber"
              id="tdstyle"
              value={props.nameKey.cardnumber}
              onChange={props.onChange}
            />
            <tr id="tr">{props.errors.cardnumberError}</tr>
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
