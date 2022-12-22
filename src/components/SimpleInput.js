import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouchedValid, setEnteredNameTouchedValid] = useState(false);
  
  const enteredNameIsValid = enteredName !== '';
  const nameInputNameInvalid = !enteredNameIsValid && enteredNameTouchedValid;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouchedValid(true);

  };

  const formChangeHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouchedValid(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouchedValid(false);
  };


  const nameInputClassName = nameInputNameInvalid
    ? "form-control invalid"
    : "form-control";

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
        {nameInputNameInvalid && (
          <p className={"error-text"}>Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
