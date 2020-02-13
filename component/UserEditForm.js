import React from "react";

const UserEditForm = props => {
  return (
    <div align="center">
      <form>
        <table>
          <tr class="form-group">
            <td>
              <label>Name :</label>
            </td>
            <td>
              <input value={props.nameKey.name} onChange={props.onChange} />
            </td>
          </tr>
          <tr class="form-group">
            <td>
              <label>Contact No. :</label>
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={props.nameKey.contect}
                onChange={props.onChange}
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
                onChange={props.onChange}
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
                onChange={props.onChange}
              />
            </td>
          </tr>
          <tr>
            <button onClick={props.onSubmitClick}>Submit</button>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default UserEditForm;
