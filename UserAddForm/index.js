import React, { Component } from "react";
import { Modal, Table, Button, FormControl } from "react-bootstrap";

import { getUserByIDAPI, addUsersAPI } from "../../ApiServiceProvider";
export default class index extends Component {
  state = {
    user: {
      id: "",
      name: "",
      contect: "",
      bankname: "ADC",
      Email: ""
    },
    fieldError: {
      nameError: "",
      contectError: "",
      banknameError: "",
      EmailError: ""
    },
    formValid: true
  };
  userDetailChangeHandler = event => {
    const {
      target: { name, value }
    } = event;
    let input = `${[name]}`;
    let field = `${[name]}Error`;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
    let pattern;
    let msg;
    if (input === "name") {
      pattern = !value.match("^[A-Za-z]*$");
      msg = "Invalid Name!";
    }
    if (input === "contect") {
      pattern = value.length !== 10;
      msg = "Invalid Contact Number!Length must be 10.";
    }
    if (input === "Email") {
      pattern = !value.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
      msg = "Invalid Email!";
    }
    this.setState(
      {
        errorDialog: true,
        fieldError: {
          ...this.state.fieldError,
          [field]: value.length === 0 ? "Required!" : pattern ? `${msg}` : ""
        }
      },
      () => this.validate()
    );
  };
  componentDidMount() {
    if (this.props.nameKey !== "") {
      getUserByIDAPI(this.props.nameKey).then(fetchusers => {
        this.setState({
          user: fetchusers.items
        });
      });
    }
  }
  validate = () => {
    if (
      this.state.user.name !== "" &&
      this.state.user.bankname !== "" &&
      this.state.user.Email !== "" &&
      this.state.user.name.match("^[A-Za-z]*$") &&
      this.state.user.contect.length === 10 &&
      this.state.user.Email.match(
        "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+.[a-zA-Z]{1,5}$"
      )
    ) {
      this.setState({
        formValid: false
      });
    } else {
      this.setState({
        formValid: true
      });
    }
  };
  submitHandler = newusersdetails => {
    addUsersAPI(this.state.user, this.state.user.id !== "" ? true : false).then(
      this.setState({
        user: newusersdetails,    
      })
    );

    this.props.onCloseClick();
  };
  render() {
    return (
      <div>
        <Modal
          show={true}
          shouldCloseOnEsc={false}
          shouldCloseOnOverlayClick={false}
        >
          <Modal.Header>
          </Modal.Header>
          <Modal.Body>
            <div class="table-responsive-sm was-validated">
              <Table>
                <tr>
                 
                    <FormControl
                      type="text"
                      name="name"
                      class="form-control"
                      title="Only Alphabatical words excepted."
                      value={this.state.user.name}
                      onChange={this.userDetailChangeHandler}
                      placeholder=" Name"
                      id="tdstyle"
                      required={true}
                      onBlur={this.userDetailChangeHandler}
                    />
                 
                  <h6 style={{ color: "red" }}>
                    {this.state.fieldError.nameError}
                  </h6>
                  <br/>
                </tr>            
                <tr>
                  
                    <FormControl
                      type="number"
                      class="form-control"
                      name="contect"
                      value={this.state.user.contect}
                      onChange={this.userDetailChangeHandler}
                      id="tdstyle"
                      placeholder="Contact Number"
                      onBlur={this.userDetailChangeHandler}
                      required
                    />
                 
                </tr>
                <h6 style={{ color: "red" }}>
                  {this.state.fieldError.contectError}
                </h6>
              <br/>
                <tr>
                  
                    <FormControl
                      type="text"
                      name="Email"
                      id="tdstyle"
                      placeholder=" Email"
                      class="form-control"
                      value={this.state.user.Email}
                      onChange={this.userDetailChangeHandler}
                      onBlur={this.userDetailChangeHandler}
                   required />
             
                </tr>
                <h6 style={{ color: "red" }}>
                  {this.state.fieldError.EmailError}
                </h6>
              </Table>
            </div>
          </Modal.Body>
          <br></br>
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              onClick={this.submitHandler}
              disabled={this.state.formValid}
            >
              Submit
            </Button>
            <Button
              type="Cancel"
              variant="secondary"
              onClick={this.props.onCloseClick}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}