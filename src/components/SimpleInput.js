import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouchedValid, setEnteredNameTouchedValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name is not empty");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(true);
      return;
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouchedValid(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formChangeHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouchedValid(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputNameInvalid = !enteredNameIsValid && enteredNameTouchedValid;

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
