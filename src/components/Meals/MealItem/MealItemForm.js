import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return; 
    }

    props.onAddToCart(enteredAmountNumber);

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          ref: amountInputRef,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultvalue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter a valid amount between 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
