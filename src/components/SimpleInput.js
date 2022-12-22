import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameValid, setEnteredNameValid] = useState(false);
  const [enteredNameTouchedValid, setEnteredNameTouchedValid] = useState(false);


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouchedValid(true);
    
    if(enteredName.trim() === ''){
      setEnteredNameValid(false);
      return;
    }
  };

  const formChangeHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouchedValid(true);
    
    if(enteredName.trim() === ''){
      setEnteredNameValid(false);
      return;
    }
    
    setEnteredNameValid(true);
    
    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputNameInvalid = !enteredNameValid && enteredNameTouchedValid;

  const nameInputClassName = nameInputNameInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formChangeHandler}>
      <div className={nameInputClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputNameInvalid && <p className={"error-text"}>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
