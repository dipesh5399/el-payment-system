import React from "react";
import "../cssfiles/UserAddForm.css";

import { Modal, Alert, Button } from "react-bootstrap";

const UserAddForm = props => {
  return (
    <Modal
      show={true}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      id="modaldisplay"
    >
      <Modal.Header style={{ backgroundColor: "rgb(154, 193, 209)" }}>
        <Modal.Title>
          {props.addform ? "Welcome User!" : "User Details"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="ModalBody">
        {props.errordialog && (
          <Alert variant="danger" align="center">
            <table>
              <tr>
                <tr> {props.errors.nameError}</tr>
                <tr>{props.errors.contectError}</tr>
                <tr> {props.errors.banknameError}</tr>
                <tr> {props.errors.cardnumberError}</tr>
              </tr>
            </table>
          </Alert>
        )}

        <div align="center">
          <table>
            <tr>
              <input
                type="text"
                pattern="[A-Za-z]"
                name="name"
                title="Only Alphabatical words excepted."
                value={props.nameKey.name}
                onChange={props.onChange}
                placeholder="   Name"
                id="tdstyle"
                style={{
                  borderColor:
                    props.errors.nameError === "" ? "" : "rgb(253, 131, 181)"
                }}
              />
            </tr>
            <br />
            <tr>
              <input
                type="number"
                class="form-control"
                name="contect"
                value={props.nameKey.contect}
                onChange={props.onChange}
                id="tdstyle"
                placeholder="Contact Number"
              />{" "}
            </tr>
            <br />
            <tr>
              <select
                value={props.nameKey.bankname}
                onChange={props.onChange}
                id="tdstyle"
                name="bankname"
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
            </tr>
            <br />
            <tr>
              <input
                type="text"
                title="Invalid!Must be in xxxx-xxxx-xxxx-xxxx form."
                pattern="[0-9]-[0-9]-[0-9]-[0-9]"
                name="cardnumber"
                id="tdstyle"
                placeholder="   Card Number"
                value={props.nameKey.cardnumber}
                onChange={props.onChange}
              />
            </tr>
          </table>
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
