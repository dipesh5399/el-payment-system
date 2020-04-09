import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Load from "./Loader";
import bg from "./bg-01.jpg";
import  "../component/regi.css";
import { registerAPI } from "../ApiServiceProvider";
export default class Registration extends Component {
    state = {
        user: {
          name: "",
          email: "",
          pass: "",
         cp: ""
        },
        fieldError: {
          nameError: "",
          emailError: "",
          passError: "",
          cpError: ""
        },
        loading: false,
        path:"/Registration"
    }
    componentDidMount()
    {
           this.setState({loading:true})
           setTimeout (() => {
               
               this.setState({
                   loading:false
               })
           },3000)
    }
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
        let pattern;
        let msg;
        if (input === "name") {
          pattern = !value.match("^[A-Za-z]*$");
          msg = "Invalid Name!";
        }
        if (input === "pass") {
          pattern = value.length <= 7;
          msg = "Weak Password!";
        }
        if (input === "email") {
          pattern = !value.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
          msg = "Invalid Email!";
        }
        if (input === "cp") {
            pattern = !value.match(this.state.user.pass);
            msg = "Password Missmatch!";
          }
        this.setState(
          {
            errorDialog: true,
            fieldError: {
              ...this.state.fieldError,
              [field]: value.length === 0 ? "Required!" : pattern ? `${msg}` : ""
            }
          },
          
        );console.log(this.state);
      };
    render() {
        return (
            <React.Fragment>
            <div style={{textAlignLast: "center"}}>
                {
                   
                this.state.loading &&  <Load></Load>
               }
               </div>
               
               {!this.state.loading &&
            <div>
                  <div class="limiter" style={{backgroundImage:`url(${bg})`}}>
		<div class="container-login100" >
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-34 p-t-27">
						Sign Up
					</span>

					<div class="wrap-input100 validate-input" data-validate="Enter username">
						<input class="input100" type="text" name="name" placeholder="Username" onChange={this.userDetailChangeHandler}/>
						<span class="focus-input100" data-placeholder=""></span>
					</div>
                    <h6 style={{ color: "green" }}>
                    {this.state.fieldError.nameError}
                  </h6>
                    <div class="wrap-input100 validate-input" data-validate="Enter username">
						<input class="input100" type="text" name="email" placeholder="Email" onChange={this.userDetailChangeHandler}/>
						<span class="focus-input100" data-placeholder=""></span>
					</div>
                    <h6 style={{ color: "green" }}>
                    {this.state.fieldError.emailError}
                  </h6>
					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password" onChange={this.userDetailChangeHandler}/>
						<span class="focus-input100" data-placeholder=""></span>
					</div>
                    <h6 style={{ color: "green" }}>
                    {this.state.fieldError.passError}
                  </h6>
                    <div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="cp" placeholder="Confirm Password" onChange={this.userDetailChangeHandler}/>
						<span class="focus-input100" data-placeholder=""></span>
					</div>
                    <h6 style={{ color: "green" }}>
                    {this.state.fieldError.cpError}
                  </h6>
					<div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div class="container-login100-form-btn">
						<button class=".login100-form-btn">
            <Link to={`${this.state.path}`} onClick={()=> (this.state.user.name !== "" &&
                        this.state.user.email !== "" && this.state.user.pass !== "" && this.state.user.cp !== "") ? registerAPI(this.state.user).then(this.setState({
							path:"/"
            })) : alert("Please Fillup All the details with proper format!")}><h5>Sign In</h5></Link>
						</button>
					
						<button style={{paddingLeft:"200px"}}>
            <Link to={"/"}><h5>Login</h5></Link>
						</button>
					</div>
				
				</form>
			</div>
		</div>
	</div>
         
            </div>}
            </React.Fragment>
        )
    }
}
