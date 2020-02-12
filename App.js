import React, { Component } from "react";
import "./cssfiles/userTable.css";
import UserTable from "./component/UserTable";
import SearchInput from "./component/SearchInput";
import NewUsers from "./component/NewUsers";
import UserAddForm from "./component/UserAddForm";
import UserEditForm from "./component/UserEditForm";
// const addUsers = newname => {
//   return fetch("http://localhost:3005/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//       //'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify({
//       name: newname
//     })
//   });
// };
const getUsers = searchParam => {
  return fetch(
    searchParam
      ? `http://localhost:3005/users?q=${searchParam}`
      : "http://localhost:3005/users"
  ).then(response => {
    return response.json();
  });
};
const deleteUsers = userobj => {
  return fetch(
    userobj
      ? `http://localhost:3005/users/${userobj}`
      : "http://localhost:3005/users",
    {
      method: "DELETE"
    }
  ).then(response => {
    return response.json();
  });
};
export default class App extends Component {
  state = {
    isDialogVisible: false,
    isAdd: false,
    isEdit: false,
    search: "",
    users: [],
    user: {},
    name: ""
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

  onNewUserName(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
    // addUsers(this.state.name).then(fetchusers =>
    //   this.setState({
    //     users: fetchusers
    //   })
    // );
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
      isAdd: !state.isAdd,
      isDialogVisible: !state.isDialogVisible
    }));
    console.log(this.state.isDialogVisible);
  }

  handlerEditUserClick(userobj) {
    this.setState(state => ({
      ...state,
      user: userobj,
      isEdit: !state.isEdit,
      isDialogVisible: !state.isDialogVisible
    }));
    console.log(this.state.user);
  }
  handlerDeleteUserClick(userobj) {
    console.log("delete button clicked");
    console.log(userobj);
    deleteUsers(userobj).then(fetchusers =>
      this.setState({
        users: fetchusers
      })
    );
  }
  render() {
    return (
      <React.Fragment>
        <SearchInput
          searchKey={this.state.search}
          onChange={this.onSearch.bind(this)}
        />
        <NewUsers onAddUserClick={this.handlerNewUserButtonClick.bind(this)} />

        {this.state.isAdd && <UserAddForm />}
        {this.state.isEdit && (
          <UserEditForm
            nameKey={this.state.name}
            name={this.state.user.name}
            onChange={this.onNewUserName.bind(this)}
            contactno={this.state.user.contect}
            bankname={this.state.user.bankname}
            cardnumber={this.state.user.cardnumber}
            onSubmitClick
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
// const handleSort = () => {
//   console.log("name button clicked.");
// };
/* <input
placeholder="search"
type="text"
onChange={this.updatesearch.bind(this)}
style={{
  height: "20px",
  witdh: "150px",
  position: "absolute",
  left: "20px"
  // right: "10px"
  // top: "5px"
}}
></input> */
