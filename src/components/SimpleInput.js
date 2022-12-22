import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameValid, setEnteredNameValid] = useState(true);


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formChangeHandler = (event) => {
    event.preventDefault();
    
    if(enteredName.trim() === ''){
      setEnteredNameValid(false);
      return;
    }
    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputClassName = enteredNameValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formChangeHandler}>
      <div className={nameInputClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameValid && <p className={"error-text"}>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
