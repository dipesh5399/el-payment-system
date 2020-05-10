import React from 'react';

 const Form = props => {
    return (
        <div>
          Name:
          <input type="text" value={props.personName} placeholder="Enter Name" name="name" onChange={props.onChange} />
    
        <button onClick={props.onSubmitClick}>Submit</button>

      <label>{props.errorMessage}</label>
        </div>
    )
}
export default Form;