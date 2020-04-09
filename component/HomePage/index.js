import React, { Component } from "react";
import UserTable from "../UserTable/index";
import SearchInput from "../SearchAndPagiAndAddUser/index";
import UserAddForm from "../UserAddForm/index";
import {toast } from "react-toastify";
import Load from "../Loader";
import { getUsersAPI, deleteUsersAPI } from "../../ApiServiceProvider";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
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
    sortOrder: "asc",
    loading: false,
    loader : false
  };
  getUsers = () => {
    getUsersAPI(this.state, true).then(fetchusers => {
      this.setState({
        users: fetchusers.items,
        totalItems: fetchusers.total,
      });
    });
    setTimeout (() => {
               
      this.setState({
          loader:false
      })
  },1000)
  };
  componentDidMount() {
    this.getUsers();
    this.setState({loading:true})
           setTimeout (() => {
               
               this.setState({
                   loading:false
               })
           },3000)
  }
  pageChangeHandler = (page, limit) => {
    this.setState(
      {
        activePage: page,
        pageLimit: limit,
        loader:true
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
    this.setState({ [name]: value, activePage: 1,loader:true }, () => {
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
      toast("Successfully Deleted!",{ type: "success" });
    }
    else{
      toast("hello...",{ type: "success" });
    }
    this.getUsers();
  };

  closeHandler = () => {
    this.setState({
      isAdd: false,
      isDialogVisible: false,
      errorDialog: false,
      loader:true
    });
    this.getUsers();
  };
  sortingHandler = (attrib, order) => {
    this.setState(
      {
        sortBy: attrib,
        sortOrder: order,
        activePage: 1,loader:true
      },
      () => this.getUsers()
    );
  };
  render() {
    if(this.state.loading){
      return <div style={{textAlignLast: "center"}}><Load></Load></div>
      
    }
   else { return (
      <React.Fragment> 
              
        <SearchInput
          items={Math.ceil(this.state.totalItems / this.state.pageLimit)}
          limit={this.state.pageLimit}
          searchKey={this.state.search}
          activePage={this.state.activePage}
          onChange={this.onChangeHandler}
          onAddUserClick={this.newUserButtonClickHandler}
          onPageChange={this.pageChangeHandler}
        />        
        {this.state.isAdd && (
          <UserAddForm
            nameKey={this.state.id}
            onCloseClick={this.closeHandler}
          />
        )}
        {  <UserTable
          user={this.state.users}
          onEditUserClick={this.newUserButtonClickHandler}
          onPaymentCall={this.handlerPayment}
          onDeleteUserClick={this.deleteUserClickHandler}
          onSortingClick={this.sortingHandler}
          loader={this.state.loader}
        />}
      </React.Fragment>
    );
        }     
  }
}