import React, { Component } from "react";
import Load from "../Loader";
import "../UserTable/main.css";
import * as BT from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import Payment from "../PaymentMethod";

class UserTable extends Component {
  state={
    modelview: false,
    ID:"",
    price:"",
    cp:"",
    status:"",
    selname:""
  }
  paymentHandler = (IDEmail,IDName) => {
            this.setState({
              modelview:true,
              ID: IDEmail,
              selname: IDName
            })
  }
  onChangeHandler = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value,cp:""});
  };
  render(){
  var count = 0;
  var newpr = this.state.price;
  return this.props.user.length === 0 ? (
    <div align="center">
      <h4>No Data Available.</h4>
    </div>
  ) : (    
      <div class="limiter"> <hr />  
         <div class="table100 ver3 m-b-110 ">
          <div class="table100-body ">
            <table
              style={{ tableLayout: "fixed" }}
              class="table table-hover table-borderless table-responsive-lg"
            >
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>
                    NAME
                    <a href="#">
                      <Icons.ArrowUp
                        size={25}
                        onClick={() => this.props.onSortingClick("name", "asc")}
                      ></Icons.ArrowUp>
                    </a>
                    <a href="#">
                      <Icons.ArrowDown
                        size={25}
                        onClick={() => this.props.onSortingClick("name", "desc")}
                      ></Icons.ArrowDown>
                    </a>
                  </th>
                  <th>
                    Phone
                    <a href="#">
                      <Icons.ArrowUp
                        size={25}
                        onClick={() => this.props.onSortingClick("contect", "asc")}
                      ></Icons.ArrowUp>
                    </a>
                    <a href="#">
                      <Icons.ArrowDown
                        size={25}
                        onClick={() => this.props.onSortingClick("contect", "desc")}
                      ></Icons.ArrowDown>
                    </a>
                  </th>
                  <th colSpan="2">Email ID</th>
                  <th>Payment</th>
                  <th>Profile</th>
                </tr>
              </thead>
             { this.props.loader ? <tr style={{textAlignLast: "center"}} ><td colSpan="8"><Load></Load></td></tr> :
              <tbody>
                {this.props.user.map((userobj, id) => {
                  return (
                    <tr key={id}>
                      <td>{++count}</td>
                      <td>{userobj.name}</td>
                      <td>{userobj.contect}</td>
                      
                      <td colSpan="2">{userobj.Email}</td>
                      <td>
                         <BT.Button variant="link" onClick={() => this.paymentHandler(userobj.Email,userobj.name)}>Charge</BT.Button>
                      </td>
                      <td>
                        <BT.Button variant="link">
                          <Icons.Pencil
                            onClick={() => this.props.onEditUserClick(userobj.id)}
                            color="royalblue"
                            size={25}
                          ></Icons.Pencil>
                        </BT.Button>
                        {"/"}
                        <BT.Button variant="link">
                          <Icons.Trash
                            onClick={() => this.props.onDeleteUserClick(userobj.id)}
                            color="red"
                            size={25}
                            alt="Delete Icon"
                          ></Icons.Trash>
                        </BT.Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>}
            </table>
          </div>
          {this.state.modelview &&   <BT.Modal
          show={true}
          shouldCloseOnEsc={false}
          shouldCloseOnOverlayClick={false}
        > <BT.Modal.Body> <BT.Row>
        <BT.Col xs="15">
          <BT.InputGroup>             
          <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">              
                    Amount
                  </span>
                </div>
              <BT.FormControl
                placeholder="Enter Amount Here"
                type="number"
                value={this.state.price }
                 onChange={this.onChangeHandler}
                name="price"
              ></BT.FormControl>      <BT.Button onClick={() => this.setState({cp: this.state.price})} disabled ={this.state.price === "" ? true : false}>Done</BT.Button>     
          </BT.InputGroup>
        </BT.Col></BT.Row></BT.Modal.Body><BT.Modal.Footer>{console.log(newpr)}
         { this.state.cp !== "" && <Payment email={this.state.ID} name={this.state.selname} p={newpr} updatestatus={this.state.status}/>}
        <BT.Button size="sm"  variant="secondary" onClick={()=> this.setState({modelview:false,price:"",cp:""})}>Cancle</BT.Button>
      </BT.Modal.Footer></BT.Modal>}
        </div>
      </div>
    
  );}
};
export default UserTable;