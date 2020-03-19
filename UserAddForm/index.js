// import React from "react";
// import {
//   Modal,
//   Table,
//   Button,
//   InputGroup,
//   FormControl,
//   Dropdown
// } from "react-bootstrap";

// // <UserAddEditForm userId onClose />;
// //   state = {
// //     firstName: ''
// //   }
// // onSave:
// //   this.props.onClose()
// // fetch(`http://localhost:3005/users/${addUserDetails.id}`, {

// //     body: JSON.stringify({
// //       name: addUserDetails.name,
// //       contect: addUserDetails.contect,
// //       bankname: addUserDetails.bankname,
// //       Email: addUserDetails.Email
// //     })
// //   });

// const UserAddForm = props => {
//   return (
//     <Modal
//       show={true}
//       shouldCloseOnEsc={false}
//       shouldCloseOnOverlayClick={false}
//     >
//       <Modal.Header>
//         <Modal.Title>
//           {console.log(props.nameKey.id)}
//           {props.addform ? "Welcome User!" : "User Details"}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div class="table-responsive-sm">
//           <Table>
//             <tr>
//               <InputGroup>
//                 <FormControl
//                   type="text"
//                   name="name"
//                   class="form-control"
//                   title="Only Alphabatical words excepted."
//                   value={props.nameKey.name}
//                   onChange={props.onChange}
//                   placeholder=" Name"
//                   id="tdstyle"
//                   required
//                 />
//               </InputGroup>
//               {props.errordialog && (
//                 <h6 style={{ color: "red" }}>{props.errors.nameError}</h6>)}
//             </tr>
//             <br />
//             <tr>
//               <InputGroup>
//                 <FormControl
//                   type="number"
//                   class="form-control"
//                   name="contect"
//                   value={props.nameKey.contect}
//                   onChange={props.onChange}
//                   id="tdstyle"
//                   placeholder="Contact Number"
//                   required
//                 />
//               </InputGroup>
//             </tr>
//             {props.errordialog && (
//               <h6 style={{ color: "red" }}>{props.errors.contectError}</h6>
//             )}
//             <br />
//             <tr>
//               <select
//                 value={props.nameKey.bankname}
//                 onChange={props.onChange}
//                 id="exampleFormControlSelect1"
//                 name="bankname"
//                 title="Please Select Bank ."
//                 class="form-control"
//                 required
//               >
//                 <option selected>Select Bank</option>
//                 <option>ADC</option>
//                 <option>BOI</option>
//                 <option>HDFC</option> <option>IndusLand Bank</option>
//                 <option>Maharastra Bank</option>
//                 <option>Punjab Bank</option>
//                 <option>SBI</option>
//                 <option>UBI</option>
//               </select>
//             </tr>

//             {props.errordialog && (
//               <h6 style={{ color: "red" }}>{props.errors.banknameError}</h6>
//             )}
//             <br />
//             <tr>
//               <InputGroup>
//                 <FormControl
//                   type="text"
//                   name="Email"
//                   id="tdstyle"
//                   placeholder=" Email"
//                   class="form-control"
//                   value={props.nameKey.Email}
//                   onChange={props.onChange}
//                   required
//                 />
//               </InputGroup>
//             </tr>
//             {props.errordialog && (
//               <h6 style={{ color: "red" }}>{props.errors.EmailError}</h6>
//             )}
//           </Table>
//         </div>
//       </Modal.Body>
//       <br></br>
//       <Modal.Footer>
//         <Button type="submit" variant="primary" onClick={props.onClick}>
//           Submit
//         </Button>
//         <Button type="Cancel" variant="secondary" onClick={props.onCloseClick}>
//           Cancel
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default UserAddForm;
import React, { Component } from "react";
import {
  Modal,
  Table,
  Button,
  InputGroup,
  FormControl,
  Dropdown
} from "react-bootstrap";
import { getUserByIDAPI, addUsersAPI } from "../../ApiServiceProvider";

export default class index extends Component {
  state = {
    user: {
      id: "",
      name: "",
      contect: "",
      bankname: "",
      Email: ""
    }
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
    this.setState({
      errorDialog: true,
      fieldError: {
        ...this.state.fieldError,
        [field]: value.length === 0 ? "Required!" : pattern ? `${msg}` : ""
      }
    });
  };

  componentDidMount() {
    console.log(this.state.user);
    getUserByIDAPI(this.props.nameKey).then(fetchusers => {
      this.setState({
        user: this.props.nameKey ? fetchusers.items : this.state.user
      });
    });
    console.log(this.props.nameKey);
  }
  submitHandler = newusersdetails => {
    // var isValid = this.validate();
    //if (isValid) {
    addUsersAPI(this.state.user, this.props.nameKey === "" ? false : true).then(
      this.setState(
        {
          user: newusersdetails
        },
        () => {
          console.log("done", this.state);
        }
      )
    );
    // }
    //this.getUsers();
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
            <Modal.Title>
              {console.log(this.state)}
              {this.props.addform ? "Welcome User!" : "User Details"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="table-responsive-sm">
              <Table>
                <tr>
                  <InputGroup>
                    <FormControl
                      type="text"
                      name="name"
                      class="form-control"
                      title="Only Alphabatical words excepted."
                      value={this.state.user.name}
                      onChange={this.userDetailChangeHandler}
                      placeholder=" Name"
                      id="tdstyle"
                      required
                    />
                  </InputGroup>
                  {this.props.errordialog && (
                    <h6 style={{ color: "red" }}>
                      {this.state.fieldError.nameError}
                    </h6>
                  )}
                </tr>
                <br />
                <tr>
                  <InputGroup>
                    <FormControl
                      type="number"
                      class="form-control"
                      name="contect"
                      value={this.state.user.contect}
                      onChange={this.userDetailChangeHandler}
                      id="tdstyle"
                      placeholder="Contact Number"
                      required
                    />
                  </InputGroup>
                </tr>
                {this.props.errordialog && (
                  <h6 style={{ color: "red" }}>
                    {this.props.errors.contectError}
                  </h6>
                )}
                <br />
                <tr>
                  <select
                    value={this.state.user.bankname}
                    onChange={this.userDetailChangeHandler}
                    id="exampleFormControlSelect1"
                    name="bankname"
                    title="Please Select Bank ."
                    class="form-control"
                    required
                  >
                    <option selected>Select Bank</option>
                    <option>ADC</option>
                    <option>BOI</option>
                    <option>HDFC</option> <option>IndusLand Bank</option>
                    <option>Maharastra Bank</option>
                    <option>Punjab Bank</option>
                    <option>SBI</option>
                    <option>UBI</option>
                  </select>
                </tr>

                {this.props.errordialog && (
                  <h6 style={{ color: "red" }}>
                    {this.props.errors.banknameError}
                  </h6>
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
                      value={this.state.user.Email}
                      onChange={this.userDetailChangeHandler}
                      required
                    />
                  </InputGroup>
                </tr>
                {this.props.errordialog && (
                  <h6 style={{ color: "red" }}>
                    {this.props.errors.EmailError}
                  </h6>
                )}
              </Table>
            </div>
          </Modal.Body>
          <br></br>
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              onClick={this.submitHandler}
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
