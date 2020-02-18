import React, { Component } from "react";
import "./cssfiles/userTable.css";
import UserTable from "./component/UserTable";
import SearchInput from "./component/SearchInput";
import NewUsers from "./component/NewUsers";
import UserAddForm from "./component/UserAddForm";
import UserEditForm from "./component/UserEditForm";
import {
  getUsers,
  deleteUsers,
  addUsers,
  editUsers
} from "./ApiServiceProvider";

export default class App extends Component {
  state = {
    isDialogVisible: false,
    isAdd: false,
    isEdit: false,
    search: "",
    users: [],
    user: {
      id: "",
      name: "",
      contect: "",
      bankname: "",
      cardnumber: ""
    },
    sortingnameorder: false,
    sortingcontectorder: true,
    sortingbanknameorder: true,
    sortingcardnumberorder: true
  };
  onSearch(event) {
    this.setState({ search: event.target.value }, () => {
      getUsers(this.state.search).then(fetchusers =>
        this.setState({
          users: fetchusers
        })
      );
    });
  }

  onNameChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value
      }
    });
    console.log(this.state.user);
  }

  onContectChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        contect: event.target.value
      }
    });
    console.log(this.state.user);
  }
  onBankNameChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        bankname: event.target.value
      }
    });
    console.log(this.state.user);
  }
  onCardNumberChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        cardnumber: event.target.value
      }
    });
  }
  componentDidMount() {
    getUsers().then(fetchusers =>
      this.setState({
        users: fetchusers
      })
    );
  }
  handlerNewUserButtonClick() {
    console.log("newuserhandlercalled.");
    this.setState(state => ({
      ...state,
      isAdd: true,
      isDialogVisible: !state.isDialogVisible,
      isEdit: false,
      user: { id: "", name: "", contect: "", bankname: "", cardnumber: "" }
    }));
    console.log(this.state.isDialogVisible);
  }

  handlerEditUserClick(userobj) {
    console.log(userobj);
    this.setState(state => ({
      ...state,
      user: userobj,
      isEdit: true,
      isDialogVisible: !state.isDialogVisible,
      isAdd: false
    }));
    console.log(this.state.user);
  }
  handlerDeleteUserClick(userid) {
    console.log("delete button clicked");
    console.log(userid);
    deleteUsers(userid);
    window.location.reload(true);
  }
  handlerOnSubmit(newusersdetails) {
    console.log(newusersdetails);
    if (
      this.state.user.name === "" ||
      this.state.user.contect === "" ||
      this.state.user.bankname === "" ||
      this.state.user.cardnumber === "" ||
      this.state.user.contect.length !== 10
    ) {
      alert("Fillup All Details Properly.");
    } else {
      this.setState(state => ({
        ...state,
        user: newusersdetails,
        isAdd: true,
        isDialogVisible: !state.isDialogVisible,
        isEdit: false
      }));
      addUsers(this.state.user).then(fetchusers =>
        this.setState({
          users: fetchusers
        })
      );
      window.location.reload(true);
    }
  }
  handlerEditOnSubmit(editusersdetails) {
    this.setState(state => ({
      ...state,
      user: editusersdetails,
      isEdit: !state.isEdit,
      isDialogVisible: !state.isDialogVisible,
      isAdd: false
    }));
    editUsers(this.state.user).then(fetchusers =>
      this.setState({
        users: fetchusers
      })
    );
    window.location.reload(true);
  }
  onClose() {
    this.setState({
      isAdd: false,
      isEdit: false,
      isDialogVisible: false
    });
  }
  handleSorting(attrib, order) {
    if (attrib === "name") {
      getUsers(this.state.search, attrib, order).then(fetchusers =>
        this.setState({
          users: fetchusers
        })
      );
    }
    if (attrib === "contect") {
      getUsers(this.state.search, attrib, order).then(fetchusers =>
        this.setState({
          users: fetchusers
        })
      );
    }
    if (attrib === "bankname") {
      getUsers(this.state.search, attrib, order).then(fetchusers =>
        this.setState({
          users: fetchusers
        })
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <SearchInput
          searchKey={this.state.search}
          onChange={this.onSearch.bind(this)}
        />
        <NewUsers onAddUserClick={this.handlerNewUserButtonClick.bind(this)} />
        <br />
        {this.state.isAdd && (
          <UserAddForm
            nameKey={this.state.user}
            onNameChange={this.onNameChange.bind(this)}
            onContectChange={this.onContectChange.bind(this)}
            onBankNameChange={this.onBankNameChange.bind(this)}
            onCardNumberChange={this.onCardNumberChange.bind(this)}
            onClick={this.handlerOnSubmit.bind(this)}
            onCloseClick={this.onClose.bind(this)}
          />
        )}
        {this.state.isEdit && (
          <UserEditForm
            onNameChange={this.onNameChange.bind(this)}
            onClick={this.handlerEditOnSubmit.bind(this)}
            onContectChange={this.onContectChange.bind(this)}
            onBankNameChange={this.onBankNameChange.bind(this)}
            onCardNumberChange={this.onCardNumberChange.bind(this)}
            nameKey={this.state.user}
            onCloseClick={this.onClose.bind(this)}
          />
        )}
        {/* {this.setState({
          isEdit: !this.state.isEdit,
          isAdd: !this.state.isAdd
        })} */}
        <br></br>
        <hr />
        <UserTable
          user={this.state.users}
          onEditUserClick={this.handlerEditUserClick.bind(this)}
          onDeleteUserClick={this.handlerDeleteUserClick.bind(this)}
          onSortingClick={this.handleSorting.bind(this)}
        />
      </React.Fragment>
    );
  }
}
// let filteredlist = db.users.name.filter(userfiltered => {
//   return (
//     userfiltered.name
//       .toLowerCase()
//       .indexOf(this.state.search.toLowerCase()) !== -1
//   );
// });
