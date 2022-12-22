import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouchedValid, setEnteredNameTouchedValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [EmailIsTouched, setEmailIsTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);
  

  const enteredNameIsValid = enteredName !== "";
  const nameInputNameInvalid = !enteredNameIsValid && enteredNameTouchedValid;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputNameInvalid = !enteredEmailIsValid && EmailIsTouched;


  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
    
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) =>{
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouchedValid(true);
  };

  const emailInputBlurHandler = (event) =>{
    setEmailIsTouched(true);
  };


  const formChangeHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouchedValid(true);
    setEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouchedValid(false);

    console.log(enteredEmail);
    setEnteredEmail("");
    setEmailIsTouched(false);
  };

  const nameAndemailInputClassName = nameInputNameInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formChangeHandler}>
      <div className={nameAndemailInputClassName}>
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
      <div className={nameAndemailInputClassName}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputNameInvalid && (
          <p className={"error-text"}>Email must include '@'.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
