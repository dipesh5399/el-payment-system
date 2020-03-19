import React, { Component } from "react";
import UserTable from "../UserTable/index";
import SearchInput from "../SearchAndPagiAndAddUser/index";
import UserAddForm from "../UserAddForm/index";
import {
  getUsersAPI,
  deleteUsersAPI,
  addUsersAPI
} from "../../ApiServiceProvider";
// CardVaultList
// CardVaultAddEdit isVisible, cardVaultId={1}
export default class HomePage extends Component {
  state = {
    isDialogVisible: false,
    isAdd: false,
    errorDialog: false,
    search: "",
    users: [],
    totalItems: "",
    activePage: 1,
    pageLimit: 5,
    isDisable: false,
    sortBy: "name",
    sortOrder: "asc"
  };
  getUsers = () => {
    getUsersAPI(this.state, true).then(fetchusers => {
      this.setState({
        users: fetchusers.items,
        totalItems: fetchusers.total
      });
    });
  };
  componentDidMount() {
    this.getUsers();
  }
  pageChangeHandler = (page, limit) => {
    this.setState(
      {
        activePage: page,
        pageLimit: limit
      },
      () => {
        this.getUsers();
      }
    );
  };
  onChangeHandler = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value, activePage: 1 }, () => {
      this.getUsers();
    });
  };
  // userDetailChangeHandler = event => {
  //   const {
  //     target: { name, value }
  //   } = event;
  //   let input = `${[name]}`;
  //   let field = `${[name]}Error`;
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       [name]: value
  //     }
  //   });
  //   let pattern;
  //   let msg;
  //   if (input === "name") {
  //     pattern = !value.match("^[A-Za-z]*$");
  //     msg = "Invalid Name!";
  //   }
  //   if (input === "contect") {
  //     pattern = value.length !== 10;
  //     msg = "Invalid Contact Number!Length must be 10.";
  //   }
  //   if (input === "Email") {
  //     pattern = !value.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
  //     msg = "Invalid Email!";
  //   }
  //   this.setState({
  //     errorDialog: true,
  //     fieldError: {
  //       ...this.state.fieldError,
  //       [field]: value.length === 0 ? "Required!" : pattern ? `${msg}` : ""
  //     }
  //   });
  //   console.log(this.state.user);
  // };
  newUserButtonClickHandler = userid => {
    console.log("called");
    this.setState(state => ({
      isAdd: true,
      user: userid,
      isDialogVisible: !state.isDialogVisible
    }));
  };
  editUserClickHandler = userid => {
    this.setState(state => ({
      isEdit: true,
      isDialogVisible: !state.isDialogVisible
    }));
  };
  deleteUserClickHandler = userid => {
    if (window.confirm("Are you sure?") === true) {
      deleteUsersAPI(userid);
    }
    this.getUsers();
  };
  validate = () => {
    let nameError = "";
    let contectError = "";
    let banknameError = "";
    let EmailError = "";
    !this.state.user.name ? (nameError = "Required!") : (nameError = "");
    if (this.state.user.name && !this.state.user.name.match("^[A-Za-z]*$")) {
      nameError = "Invalid Name!";
    }
    !this.state.user.contect
      ? (contectError = "Required!")
      : (contectError = "");
    !this.state.user.bankname
      ? (banknameError = "Required!")
      : (banknameError = "");
    if (this.state.user.contect && this.state.user.contect.length !== 10) {
      contectError = "Invalid Contact Number!Length must be 10.";
    }
    !this.state.user.Email ? (EmailError = "Required!") : (EmailError = "");
    if (
      this.state.user.Email &&
      !this.state.user.Email.match(
        "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
      )
    ) {
      EmailError = "Invalid Email!";
    }
    if (nameError || contectError || banknameError || EmailError) {
      this.setState({
        errorDialog: true,
        fieldError: {
          ...this.state.fieldError,
          nameError,
          contectError,
          banknameError,
          EmailError
        }
      });
      return false;
    }
    return true;
  };
  submitHandler = newusersdetails => {
    var isValid = this.validate();
    if (isValid) {
      addUsersAPI(this.state.user, this.state.isEdit).then(
        this.setState(
          {
            user: newusersdetails,
            isAdd: false,
            isEdit: false,
            isDialogVisible: false,
            errorDialog: false,
            fieldError: {}
          },
          () => {
            console.log("done", this.state);
          }
        )
      );
    }
    this.getUsers();
  };
  closeHandler = () => {
    this.setState({
      isAdd: false,
      isEdit: false,
      isDialogVisible: false,
      errorDialog: false,
      fieldError: {
        ...this.state.fieldError,
        nameError: "",
        contectError: "",
        banknameError: "",
        EmailError: ""
      }
    });
  };
  sortingHandler = (attrib, order) => {
    this.setState(
      {
        sortBy: attrib,
        sortOrder: order,
        activePage: 1
      },
      () => this.getUsers()
    );
  };

  render() {
    return (
      <React.Fragment>
        <hr />
        <SearchInput
          items={Math.ceil(this.state.totalItems / this.state.pageLimit)}
          limit={this.state.pageLimit}
          searchKey={this.state.search}
          activePage={this.state.activePage}
          onChange={this.onChangeHandler}
          onAddUserClick={this.newUserButtonClickHandler}
          onPageChange={this.pageChangeHandler}
        />
        <hr />
        {this.state.isAdd && (
          <UserAddForm
            nameKey={this.state.user}
            errordialog={this.state.errorDialog}
            errors={this.state.fieldError}
            onCloseClick={this.closeHandler}
          />
        )}
        <UserTable
          user={this.state.users}
          isDisable={this.state.isDisable}
          onEditUserClick={this.newUserButtonClickHandler}
          onPaymentCall={this.handlerPayment}
          onDeleteUserClick={this.deleteUserClickHandler}
          onSortingClick={this.sortingHandler}
        />
      </React.Fragment>
    );
  }
}
