import React, { Component } from "react";

//import UserTable from "./component/UserTable";
//import SearchInput from "./component/SearchAndPagiAndAddUser";
//import UserAddForm from "./component/UserAddForm";
//import { getUsers, deleteUsers, addUsers } from "./ApiServiceProvider";
import PaymentMethod from "./component/PaymentMethod";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./component/HomePage";
export default class App extends Component {
  // state = {
  //   isDialogVisible: false,
  //   isAdd: false,
  //   isEdit: false,
  //   errorDialog: false,
  //   search: "",
  //   users: [],
  //   totalItems: "",
  //   user: {
  //     name: "",
  //     contect: "",
  //     bankname: "",
  //     cardnumber: ""
  //   },
  //   fieldError: {
  //     nameError: "",
  //     contectError: "",
  //     banknameError: "",
  //     cardnumberError: ""
  //   },
  //   activePage: 1,
  //   pageLimit: 5,
  //   isdisable: false,
  //   sortBy: "name",
  //   sortOrder: "asc"
  // };

  // handlerOnPageChange(page, limit) {
  //   this.setState(
  //     {
  //       ...this.state,
  //       activePage: page,
  //       pageLimit: limit
  //     },
  //     () => {
  //       this.callback();
  //     }
  //   );
  // }
  // onSearch(event) {
  //   this.setState(
  //     { [event.target.name]: event.target.value, activePage: 1 },
  //     () => {
  //       this.componentDidMount();
  //     }
  //   );
  // }
  // onUserDetailChange(event) {
  //   let field = [event.target.name] + "Error";
  //   console.log(field);
  //   this.setState(
  //     {
  //       errorDialog: false,
  //       fieldError: {
  //         ...this.state.fieldError,
  //         [field]: ""
  //       },
  //       user: {
  //         ...this.state.user,
  //         [event.target.name]: event.target.value
  //       }
  //     },
  //     () => {
  //       this.validate();
  //     }
  //   );
  // }
  // componentDidMount() {
  //   getUsers(
  //     this.state.search,
  //     this.state.sortBy,
  //     this.state.sortOrder,
  //     this.state.activePage,
  //     this.state.pageLimit,
  //     true
  //   ).then(fetchusers => {
  //     this.setState({
  //       users: fetchusers.items,
  //       totalItems: fetchusers.total
  //     });
  //   });
  // }
  // handlerNewUserButtonClick() {
  //   this.setState(state => ({
  //     ...state,
  //     isAdd: true,
  //     isDialogVisible: !state.isDialogVisible,
  //     isEdit: false,
  //     user: { id: "", name: "", contect: "", bankname: "", cardnumber: "" },
  //     fieldError: {
  //       nameError: "",
  //       contectError: "",
  //       banknameError: "",
  //       cardnumberError: ""
  //     }
  //   }));
  // }
  // handlerEditUserClick(userobj) {
  //   this.setState(state => ({
  //     ...state,
  //     user: userobj,
  //     isEdit: true,
  //     isDialogVisible: !state.isDialogVisible,
  //     isAdd: false,
  //     fieldError: {
  //       nameError: "",
  //       contectError: "",
  //       banknameError: "",
  //       cardnumberError: ""
  //     }
  //   }));
  // }
  // handlerDeleteUserClick(userid) {
  //   deleteUsers(userid);
  //   window.location.reload(true);
  // }
  // validate = () => {
  //   let nameError = "";
  //   let contectError = "";
  //   let banknameError = "";
  //   let cardnumberError = "";
  //   !this.state.user.name ? (nameError = "Name Required!") : (nameError = "");
  //   if (this.state.user.name && !this.state.user.name.match("^[A-Za-z]")) {
  //     nameError = "Invalid Name!";
  //   }

  //   !this.state.user.contect
  //     ? (contectError = "Contect Number Required!")
  //     : (contectError = "");
  //   !this.state.user.bankname
  //     ? (banknameError = "Bank Name Required!")
  //     : (banknameError = "");

  //   if (this.state.user.contect && this.state.user.contect.length !== 10) {
  //     contectError = "Invalid Contact Number!Length must be 10.";
  //   }
  //   !this.state.user.cardnumber
  //     ? (cardnumberError = "Card Number Required!")
  //     : (cardnumberError = "");
  //   if (
  //     this.state.user.cardnumber &&
  //     !this.state.user.cardnumber.match(
  //       "[0-9][0-9][0-9][0-9]" +
  //         "-" +
  //         "[0-9][0-9][0-9][0-9]" +
  //         "-" +
  //         "[0-9][0-9][0-9][0-9]" +
  //         "-" +
  //         "[0-9][0-9][0-9][0-9]"
  //     )
  //   ) {
  //     cardnumberError =
  //       "Invalid CardNumber! Please Match this format(0000-0000-0000-0000)";
  //   }
  //   if (nameError || contectError || banknameError || cardnumberError) {
  //     this.setState({
  //       errorDialog: true,
  //       fieldError: {
  //         ...this.state.fieldError,
  //         nameError,
  //         contectError,
  //         banknameError,
  //         cardnumberError
  //       }
  //     });
  //     return false;
  //   }
  //   return true;
  // };
  // handlerOnSubmit(newusersdetails) {
  //   var isValid = this.validate();
  //   if (isValid) {
  //     this.setState(state => ({
  //       isAdd: !state.isAdd,
  //       isDialogVisible: !state.isDialogVisible,
  //       isEdit: !state.isEdit,
  //       fieldError: {
  //         ...this.state.fieldError,
  //         nameError: "",
  //         contectError: "",
  //         banknameError: "",
  //         cardnumberError: ""
  //       },
  //       ...state,
  //       user: newusersdetails
  //     }));
  //     addUsers(this.state.user, this.state.isEdit).then(fetchusers =>
  //       this.setState({
  //         users: fetchusers,
  //         totalItems: this.state.users
  //       })
  //     );
  //     window.location.reload(true);
  //   }
  // }
  // onClose() {
  //   this.setState({
  //     isAdd: false,
  //     isEdit: false,
  //     isDialogVisible: false,
  //     errorDialog: false
  //   });
  // }
  // handleSorting(attrib, order) {
  //   this.setState(
  //     {
  //       ...this.state,
  //       sortBy: attrib,
  //       sortOrder: order,
  //       activePage: 1
  //     },
  //     () => {
  //       this.callback();
  //     }
  //   );
  // }
  // callback() {
  //   getUsers(
  //     this.state.search,
  //     this.state.sortBy,
  //     this.state.sortOrder,
  //     this.state.activePage,
  //     this.state.pageLimit
  //   ).then(fetchusers =>
  //     this.setState({
  //       users: fetchusers
  //     })
  //   );
  // }
  // handlerClear() {
  //   this.setState({ ...this.state, search: "" }, () => {
  //     this.componentDidMount();
  //   });
  // }

  render() {
    // var totalPage;
    // var rows = [];
    // this.state.totalItems % this.state.pageLimit === 0
    //   ? (totalPage = this.state.totalItems / this.state.pageLimit)
    //   : (totalPage = this.state.totalItems / this.state.pageLimit + 1);
    // for (let i = 1; i <= totalPage; i++) {
    //   rows.push(i);
    // }
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/Payment">
              <PaymentMethod />
            </Route>
          </Switch>
        </Router>
        {/* <SearchInput
          items={rows}
          limit={this.state.pageLimit}
          searchKey={this.state.search}
          activePage={this.state.activePage}
          onChange={this.onSearch.bind(this)}
          onClear={this.handlerClear.bind(this)}
          onAddUserClick={this.handlerNewUserButtonClick.bind(this)}
          onPageChange={this.handlerOnPageChange.bind(this)}
        />
        <br />
        {this.state.isAdd && (
          <UserAddForm
            nameKey={this.state.user}
            addform={this.state.isAdd}
            errordialog={this.state.errorDialog}
            errors={this.state.fieldError}
            onChange={this.onUserDetailChange.bind(this)}
            onClick={this.handlerOnSubmit.bind(this)}
            onCloseClick={this.onClose.bind(this)}
          />
        )}
        {this.state.isEdit && (
          <UserAddForm
            nameKey={this.state.user}
            addform={this.state.isAdd}
            errordialog={this.state.errorDialog}
            errors={this.state.fieldError}
            onChange={this.onUserDetailChange.bind(this)}
            onClick={this.handlerOnSubmit.bind(this)}
            onCloseClick={this.onClose.bind(this)}
          />
        )}{" "}
        <br />
        <hr />
        <UserTable
          user={this.state.users}
          isdisable={this.state.isdisable}
          onEditUserClick={this.handlerEditUserClick.bind(this)}
          onDeleteUserClick={this.handlerDeleteUserClick.bind(this)}
          onSortingClick={this.handleSorting.bind(this)}
        /> */}
      </React.Fragment>
    );
  }
}
