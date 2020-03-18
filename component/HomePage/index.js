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
    isEdit: false,
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
    //  if (input === "name") {
    this.setState({
      errorDialog: true,
      fieldError: {
        ...this.state.fieldError,
        [field]:
          value.length === 0
            ? "Required!"
            : // : !value.match("^[A-Za-z]*$")
              // ? "Invalid Name!"
              ""
      }
    });
    // }
  };
  newUserButtonClickHandler = () => {
    this.setState(state => ({
      ...state,
      isAdd: true,
      isDialogVisible: !state.isDialogVisible,
      user: { id: "" }
    }));
  };
  editUserClickHandler = userobj => {
    this.setState(state => ({
      ...state,
      user: userobj,
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
    let emailError = "";
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
    !this.state.user.Email ? (emailError = "Required!") : (emailError = "");
    if (
      this.state.user.Email &&
      !this.state.user.Email.match(
        "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
      )
    ) {
      emailError = "Invalid Email!";
    }
    if (nameError || contectError || banknameError || emailError) {
      this.setState({
        errorDialog: true,
        fieldError: {
          ...this.state.fieldError,
          nameError,
          contectError,
          banknameError,
          emailError
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
        this.setState(state => ({
          isAdd: false,
          isEdit: false,
          isDialogVisible: false,
          errorDialog: false,
          fieldError: {
            ...this.state.fieldError
          },
          ...state,
          user: newusersdetails
        }))
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
        emailError: ""
      }
    });
  };
  sortingHandler = (attrib, order) => {
    this.setState(
      {
        ...this.state,
        sortBy: attrib,
        sortOrder: order,
        activePage: 1
      },
      () => this.getUsers()
    );
  };
  clearHandler = () => {
    this.setState({ ...this.state, search: "" }, () => {
      this.getUsers();
    });
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
          onClear={this.clearHandler}
          onAddUserClick={this.newUserButtonClickHandler}
          onPageChange={this.pageChangeHandler}
        />
        <hr />
        {this.state.isAdd && (
          <UserAddForm
            nameKey={this.state.user}
            addform={this.state.isAdd}
            errordialog={this.state.errorDialog}
            errors={this.state.fieldError}
            onChange={this.userDetailChangeHandler}
            onClick={this.submitHandler}
            onCloseClick={this.closeHandler}
          />
        )}
        {this.state.isEdit && (
          <UserAddForm
            nameKey={this.state.user}
            addform={this.state.isAdd}
            errordialog={this.state.errorDialog}
            errors={this.state.fieldError}
            onChange={this.userDetailChangeHandler}
            onClick={this.submitHandler}
            onCloseClick={this.closeHandler}
          />
        )}
        <UserTable
          user={this.state.users}
          isDisable={this.state.isDisable}
          onEditUserClick={this.editUserClickHandler}
          onPaymentCall={this.handlerPayment}
          onDeleteUserClick={this.deleteUserClickHandler}
          onSortingClick={this.sortingHandler}
        />
      </React.Fragment>
    );
  }
}
