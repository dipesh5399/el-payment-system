import React, { Component } from "react";
import UserTable from "../UserTable/index";
import SearchInput from "../SearchAndPagiAndAddUser/index";
import UserAddForm from "../UserAddForm/index";
import { getUsersAPI, deleteUsersAPI } from "../../ApiServiceProvider";
// CardVaultList
// CardVaultAddEdit isVisible, cardVaultId={1}
export default class HomePage extends Component {
  state = {
    isDialogVisible: false,
    isAdd: false,
    search: "",
    users: [],
    id: "",
    totalItems: "",
    activePage: 1,
    pageLimit: 5,
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
  newUserButtonClickHandler = userid => {
    this.setState(state => ({
      isAdd: true,
      id: userid,
      isDialogVisible: !state.isDialogVisible
    }));
  };
  deleteUserClickHandler = userid => {
    if (window.confirm("Are you sure?") === true) {
      deleteUsersAPI(userid);
    }
    this.getUsers();
  };

  closeHandler = () => {
    this.setState({
      isAdd: false,
      isDialogVisible: false,
      errorDialog: false
    });
    this.getUsers();
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
            nameKey={this.state.id}
            onCloseClick={this.closeHandler}
          />
        )}
        <UserTable
          user={this.state.users}
          onEditUserClick={this.newUserButtonClickHandler}
          onPaymentCall={this.handlerPayment}
          onDeleteUserClick={this.deleteUserClickHandler}
          onSortingClick={this.sortingHandler}
        />
      </React.Fragment>
    );
  }
}
