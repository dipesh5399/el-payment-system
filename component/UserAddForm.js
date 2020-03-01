import React from "react";
import "../cssfiles/UserAddForm.css";
import Modal from "react-modal";
import { Alert } from "react-bootstrap";
const UserAddForm = props => {
  return (
       
    <Modal isOpen={true} shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false} id="modaldisplay"  >    
      <div align="center" >
      <Alert variant="danger"><table>      
      <tr>
     <tr> {props.errors.nameError}</tr><tr>{props.errors.contectError}</tr>
     <tr> {props.errors.cardnumberError}</tr>
      <tr> {props.errors.banknameError}</tr></tr>
          </table>
          </Alert>
          <table>
            <label>Name </label>        
            <tr >  
            <input
              type="text"
              pattern="[A-Za-z]"
              name="name"
              title="Only Alphabatical words excepted."
              value={props.nameKey.name}
              onChange={props.onChange}
              id="tdstyle"
            />
            
        </tr>
        
          
            <label>Contact No. </label>
            <tr>
            <input
              type="number"
              class="form-control"
              name="contect"
              value={props.nameKey.contect}
              onChange={props.onChange}
              id="tdstyle"
            />{" "}
            
    
        </tr>
     
          
            <label>Name Of Bank </label>
            <tr>
            <select
              value={props.nameKey.bankname}
              onChange={props.onChange}
              id="tdstyle"
              name="bankname"
              pattern="[A-Za-z]"
              title="Please Select Bank ."
            >
              <option></option>
              <option>ADC</option>
              <option>BOI</option>
              <option>HDFC</option> <option>IndusLand Bank</option>{" "}
              <option>Maharastra Bank</option>
              <option>Punjab Bank</option>
              <option>SBI</option>
              <option>UBI</option>
            </select>
           
        </tr>
        
          
            <label>Card Number </label>
            <tr>
            <input
              type="text"
              title="Invalid!Must be in xxxx-xxxx-xxxx-xxxx form."
              pattern="[0-9]-[0-9]-[0-9]-[0-9]"
              name="cardnumber"
              id="tdstyle"
              value={props.nameKey.cardnumber}
              onChange={props.onChange}
            />
            
        </tr>
        <tr>
          <button type="submit" onClick={props.onClick}>
            Submit
          </button>
          <button type="Cancel" onClick={props.onCloseClick}>
            Cancel
          </button>
        </tr>
      </table>
    </div>
   
    </Modal>

  );
};
export default UserAddForm;
