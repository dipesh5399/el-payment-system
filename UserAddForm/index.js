import React from "react";
import { Modal, Table, Button, InputGroup, FormControl } from "react-bootstrap";

// <UserAddEditForm userId onClose />;
//   state = {
//     firstName: ''
//   }
// onSave:
//   this.props.onClose()
// fetch(`http://localhost:3005/users/${addUserDetails.id}`, {

//     body: JSON.stringify({
//       name: addUserDetails.name,
//       contect: addUserDetails.contect,
//       bankname: addUserDetails.bankname,
//       Email: addUserDetails.Email
//     })
//   });

const UserAddForm = props => {
  return (
    <Modal
      show={true}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Header>
        <Modal.Title>
          {console.log(props.nameKey.id)}
          {props.addform ? "Welcome User!" : "User Details"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="table-responsive-sm was-touched">
          <Table>
            <tr>
              <InputGroup>
                <FormControl
                  type="text"
                  name="name"
                  class="form-control"
                  title="Only Alphabatical words excepted."
                  value={props.nameKey.name}
                  onChange={props.onChange}
                  placeholder=" Name"
                  id="tdstyle"
                  required
                />
              </InputGroup>

              {props.errordialog && (
                <h6 style={{ color: "red" }}>{props.errors.nameError}</h6>
              )}
            </tr>
            <br />
            <tr>
              <InputGroup>
                <FormControl
                  type="number"
                  class="form-control"
                  name="contect"
                  value={props.nameKey.contect}
                  onChange={props.onChange}
                  id="tdstyle"
                  placeholder="Contact Number"
                  required
                />
              </InputGroup>
            </tr>
            {props.errordialog && (
              <h6 style={{ color: "red" }}>{props.errors.contectError}</h6>
            )}
            <br />
            <tr>
              {/* <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1"  required multiple>
    <option disabled>Select Bank</option>
                <option>ADC</option>
                <option>BOI</option>
                <option>HDFC</option> <option>IndusLand Bank</option>
                <option>Maharastra Bank</option>
                <option>Punjab Bank</option>
                <option>SBI</option>
                <option>UBI</option>
    </select>
  </div> */}
              {/* Selected Bank: {props.nameKey.bankname}  */}
              <select
                value={props.nameKey.bankname}
                onChange={props.onChange}
                id="exampleFormControlSelect1"
                name="bankname"
                title="Please Select Bank ."
                class="form-control"
                required
              >
                <option disabled>Select Bank</option>
                <option>ADC</option>
                <option>BOI</option>
                <option>HDFC</option> <option>IndusLand Bank</option>
                <option>Maharastra Bank</option>
                <option>Punjab Bank</option>
                <option>SBI</option>
                <option>UBI</option>
              </select>
            </tr>

            {props.errordialog && (
              <h6 style={{ color: "red" }}>{props.errors.banknameError}</h6>
            )}
            <br />
            <tr>
              <InputGroup>
                <FormControl
                  type="text"
                  name="Email"
                  id="tdstyle"
                  placeholder=" Email"
                  class="form-control"
                  value={props.nameKey.Email}
                  onChange={props.onChange}
                  required
                />
              </InputGroup>
            </tr>
            {props.errordialog && (
              <h6 style={{ color: "red" }}>{props.errors.emailError}</h6>
            )}
          </Table>
        </div>
      </Modal.Body>
      <br></br>
      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={props.onClick}>
          Submit
        </Button>
        <Button type="Cancel" variant="secondary" onClick={props.onCloseClick}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserAddForm;
