import React, { Component } from "react";
import UserTable from "../UserTable/index";
import SearchInput from "../SearchAndPagiAndAddUser/index";
import UserAddForm from "../UserAddForm/index";
import DM from "../DelForm/index";
import { getUsers, deleteUsers, addUsers } from "../../ApiServiceProvider";

// CardVaultList
// CardVaultAddEdit isVisible, cardVaultId={1}
var id;
export default class HomePage extends Component {
  state = {
    isDialogVisible: false,
    isAdd: false,
    isEdit: false,
    errorDialog: false,
    search: "",
    users: [],
    totalItems: "",
    user: {
      name: "",
      contect: "",
      bankname: "",
      cardnumber: "",
      Email: ""
    },
    fieldError: {
      nameError: "",
      contectError: "",
      banknameError: "",
      cardnumberError: ""
    },
    activePage: 1,
    pageLimit: 5,
    isdisable: false,
    sortBy: "name",
    sortOrder: "asc",
    deletepage: false
  };
  getUserHelper = () => {
    getUsers(this.state, true).then(fetchusers => {
      this.setState({
        users: fetchusers.items,
        totalItems: fetchusers.total
      });
    });
  };
  componentDidMount() {
    this.getUserHelper();
  }
  handlerPageChange = (page, limit) => {
    this.setState(
      {
        activePage: page,
        pageLimit: limit
      },
      () => {
        this.getUserDetails();
      }
    );
  };
  handlerSearch = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value, activePage: 1 }, () => {
      this.getUserHelper();
    });
  };
  handlerUserDetailChange = event => {
    const {
      target: { name, value }
    } = event;
    let field = `${[name]}Error`;
    this.setState(
      {
        errorDialog: false,
        fieldError: {
          ...this.state.fieldError,
          [field]: ""
        },
        user: {
          ...this.state.user,
          [name]: value
        }
      },
      () => {
        this.validate();
      }
    );
  };
  handlerNewUserButtonClick = () => {
    this.setState(state => ({
      ...state,
      isAdd: true,
      isDialogVisible: !state.isDialogVisible,
      user: { id: "", name: "", contect: "", bankname: "", cardnumber: "" }
    }));
  };
  handlerEditUserClick = userobj => {
    this.setState(state => ({
      ...state,
      user: userobj,
      isEdit: true,
      isDialogVisible: !state.isDialogVisible
    }));
  };
  handlerDeleteUserClick = userid => {
    this.setState(state => ({
      ...state,
      deletepage: true
    }));
     id = userid;
    
  
  };
  handlerdeleteUser=() =>{
    this.setState(state => ({
      ...state,
      deletepage: false
    }));
    deleteUsers(id);
    this.getUserDetails();
  }

  validate = () => {
    let nameError = "";
    let contectError = "";
    let banknameError = "";
    let cardnumberError = "";
    !this.state.user.name ? (nameError = "Name Required!") : (nameError = "");
    if (this.state.user.name && !this.state.user.name.match("^[A-Za-z]*$")) {
      nameError = "Firstname and Lastname Required!";
    }
    !this.state.user.contect
      ? (contectError = "Contect Number Required!")
      : (contectError = "");
    !this.state.user.bankname
      ? (banknameError = "Bank Name Required!")
      : (banknameError = "");
    if (this.state.user.contect && this.state.user.contect.length !== 10) {
      contectError = "Invalid Contact Number!Length must be 10.";
    }
    !this.state.user.Email
      ? (cardnumberError = "Email Required!")
      : (cardnumberError = "");
    if (
      this.state.user.Email &&
      !this.state.user.Email.match(
        "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
      )
    ) {
      cardnumberError = "Invalid Email!";
    }
    if (nameError || contectError || banknameError || cardnumberError) {
      this.setState({
        errorDialog: true,
        fieldError: {
          ...this.state.fieldError,
          nameError,
          contectError,
          banknameError,
          cardnumberError
        }
      });
      return false;
    }
    return true;
  };
  handlerSubmit = newusersdetails => {
    var isValid = this.validate();
    if (isValid) {
      this.setState(state => ({
        isAdd: !state.isAdd,
        isDialogVisible: !state.isDialogVisible,
        isEdit: !state.isEdit,
        fieldError: {
          ...this.state.fieldError
        },
        ...state,
        user: newusersdetails
      }));
      addUsers(this.state.user, this.state.isEdit).then(fetchusers =>
        this.setState({
          users: fetchusers,
          totalItems: this.state.users
        })
      );
      this.getUserDetails();
    }
  };
  handlerClose = () => {
    this.setState({
      isAdd: false,
      isEdit: false,
      isDialogVisible: false,
      errorDialog: false,
      deletepage: false
    });
  };
  handlerSorting = (attrib, order) => {
    this.setState(
      {
        ...this.state,
        sortBy: attrib,
        sortOrder: order,
        activePage: 1
      },
      () => this.getUserDetails()
    );
  };
  getUserDetails = () => {
    getUsers(this.state).then(fetchusers =>
      this.setState({
        users: fetchusers
      })
    );
  };
  handlerClear = () => {
    this.setState({ ...this.state, search: "" }, () => {
      this.getUserHelper();
    });
  };

  render() {
    var totalPage;
    var rows = [];
    this.state.totalItems % this.state.pageLimit === 0
      ? (totalPage = this.state.totalItems / this.state.pageLimit)
      : (totalPage = this.state.totalItems / this.state.pageLimit + 1);
    for (let i = 1; i <= totalPage; i++) {
      rows.push(i);
    }
    return (
      <React.Fragment>
        <hr />
        <SearchInput
          items={rows}
          limit={this.state.pageLimit}
          searchKey={this.state.search}
          activePage={this.state.activePage}
          onChange={this.handlerSearch}
          onClear={this.handlerClear}
          onAddUserClick={this.handlerNewUserButtonClick}
          onPageChange={this.handlerPageChange}
        />
        <hr />
        {this.state.isAdd && (
          <UserAddForm
            nameKey={this.state.user}
            addform={this.state.isAdd}
            errordialog={this.state.errorDialog}
            errors={this.state.fieldError}
            onChange={this.handlerUserDetailChange}
            onClick={this.handlerSubmit}
            onCloseClick={this.handlerClose}
          />
        )}
        {this.state.deletepage && <DM id={id} onConfirmClick={this.handlerdeleteUser} onCloseClick={this.handlerClose} />}
        {this.state.isEdit && (
          <UserAddForm
            nameKey={this.state.user}
            addform={this.state.isAdd}
            errordialog={this.state.errorDialog}
            errors={this.state.fieldError}
            onChange={this.handlerUserDetailChange}
            onClick={this.handlerSubmit}
            onCloseClick={this.handlerClose}
          />
        )}
        <UserTable
          user={this.state.users}
          isdisable={this.state.isdisable}
          onEditUserClick={this.handlerEditUserClick}
          onPaymentCall={this.handlerPayment}
          onDeleteUserClick={this.handlerDeleteUserClick}
          onSortingClick={this.handlerSorting}
        />
      </React.Fragment>
    );
  }
}
