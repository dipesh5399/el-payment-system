import React, { Component } from "react";
import "./cssfiles/userTable.css";
import UserTable from "./component/UserTable";
import SearchInput from "./component/SearchInput";
import NewUsers from "./component/NewUsers";
import UserAddForm from "./component/UserAddForm";
import UserEditForm from "./component/UserEditForm";
import { getUsers, deleteUsers, addUsers } from "./ApiServiceProvider";

export default class App extends Component {
  state = {
    isDialogVisible: false,
    isAdd: false,
    isEdit: false,
    search: "",
    users: [],
    user: { name: "", contect: "", bankname: "", cardnumber: "" }
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
      name: event.target.value
    });

    console.log(this.state.user.name);
    // addUsers(this.state.name).then(fetchusers =>
    //   this.setState({
    //     users: fetchusers
    //   })
    // );
  }
  onContectChange(event) {
    this.setState({
      contect: event.target.value
    });
    console.log(this.state.user.contect);
  }
  onBankNameChange(event) {
    this.setState({
      bankname: event.target.value
    });
    console.log(this.state.user.bankname);
  }
  onCardNumberChange(event) {
    this.setState({
      cardumber: event.target.value
    });
    console.log(this.state.user.cardnumber);
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
    console.log(userobj);
    this.setState(state => ({
      ...state,
      user: userobj,
      isEdit: !state.isEdit,
      isDialogVisible: !state.isDialogVisible
    }));
    console.log(this.state.user);
  }
  handlerDeleteUserClick(userid) {
    console.log("delete button clicked");
    console.log(userid);
    deleteUsers(userid).then(fetchusers =>
      this.setState({
        users: fetchusers
      })
    );
  }
  handlerOnSubmit(newuser) {
    console.log(newuser);
    this.setState(state => ({
      ...state,
      user: newuser,
      isAdd: !state.isAdd,
      isDialogVisible: !state.isDialogVisible
    }));
    addUsers(this.state.user).then(fetchusers =>
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

        {this.state.isAdd && (
          <UserAddForm
            nameKey={this.state.user}
            onNameChange={this.onNameChange.bind(this)}
            onContectChange={this.onContectChange.bind(this)}
            onBankNameChange={this.onBankNameChange.bind(this)}
            onCardNumberChange={this.onCardNumberChange.bind(this)}
            onClick={this.handlerOnSubmit.bind(this)}
          />
        )}
        {this.state.isEdit && (
          <UserEditForm
            onNameChange={this.onNameChange.bind(this)}
            onContectChange={this.onContectChange.bind(this)}
            onBankNameChange={this.onBankNameChange.bind(this)}
            onCardNumberChange={this.onCardNumberChange.bind(this)}
            nameKey={this.state.user}
            // name={this.state.user.name}
            //
            // contactno={this.state.user.contect}
            // bankname={this.state.user.bankname}
            // cardnumber={this.state.user.cardnumber}
            // onSubmitClick
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
