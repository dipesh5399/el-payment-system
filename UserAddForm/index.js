import React from "react";
import { Modal, Table, Button, InputGroup, FormControl } from "react-bootstrap";

// <UserAddEditForm userId onClose />;
//   state = {
//     firstName: ''
//   }
  // onSave: 
  //   this.props.onClose()

const UserAddForm = props => {
  return (
    <Modal
      show={true}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Header>
        <Modal.Title>
          {props.addform ? "Welcome User!" : "User Details"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="table-responsive-sm">
          <Table>
            <tr>
              <InputGroup>
                {" "}
                <FormControl
                  type="text"
                  pattern="[A-Za-z]"
                  name="name"
                  class="form-control"
                  title="Only Alphabatical words excepted."
                  value={props.nameKey.name}
                  onChange={props.onChange}
                  placeholder="   Name"
                  id="tdstyle"
                />
              </InputGroup>

              {props.errordialog && (
                <p style={{ color: "red" }}>{props.errors.nameError}</p>
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
              <p style={{ color: "red" }}>{props.errors.contectError}</p>
            )}
            <br />
            <tr>
              <select
                value={props.nameKey.bankname}
                onChange={props.onChange}
                id="tdstyle"
                name="bankname"
                title="Please Select Bank ."
                class="form-control"
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
            </tr>
            {props.errordialog && (
              <p style={{ color: "red" }}>{props.errors.banknameError}</p>
            )}
            <br />
            <tr>
              <InputGroup>
                <FormControl
                  type="text"
                  title="Invalid!Must be in xxxx-xxxx-xxxx-xxxx form."
                  pattern="[0-9]-[0-9]-[0-9]-[0-9]"
                  name="cardnumber"
                  id="tdstyle"
                  placeholder="   Card Number"
                  class="form-control"
                  value={props.nameKey.cardnumber}
                  onChange={props.onChange}
                  required
                />
              </InputGroup>
            </tr>
            {props.errordialog && (
              <p style={{ color: "red" }}>{props.errors.cardnumberError}</p>
            )}
          </Table>
        </div>
      </Modal.Body>
      <br></br>
      <Modal.Footer>
        <Button
          type="submit"
          style={{
            backgroundColor: "rgb(154, 193, 209)",
            color: "black",
            textShadow: " 0 0 black"
          }}
          onClick={props.onClick}
        >
          Submit
        </Button>
        <Button
          type="Cancel"
          style={{
            backgroundColor: "rgb(248, 91, 91)",
            color: "black",
            textShadow: " 0 0 black"
          }}
          onClick={props.onCloseClick}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserAddForm;
