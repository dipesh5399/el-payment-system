import React from "react";

const UserAddForm = props => {
  return (
    <div align="center">
      <form>
        <table>
          <tr class="form-group">
            <td>
              <label>Name :</label>
            </td>
            <td>
              <input value={props.nameKey} onChange={props.onChange} />
            </td>
          </tr>
          <tr class="form-group">
            <td>
              <label>Contact No. :</label>
            </td>
            <td>
              {" "}
              <input type="text" class="form-control" value={props.contactno} />
            </td>
          </tr>
          <tr class="form-group">
            <td>
              <label>Name Of Bank :</label>
            </td>
            <td>
              <input type="text" class="form-control" value={props.bankname} />
            </td>
          </tr>
          <tr class="form-group">
            <td>
              <label>Card Number :</label>
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                value={props.cardnumber}
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
export default UserAddForm;
