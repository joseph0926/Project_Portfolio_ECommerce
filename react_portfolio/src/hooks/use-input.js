import React, { useState } from "react";

const useInput = (validedFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validedFn(enteredValue);
  const hasError = !valueIsValid && enteredValueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    valueInputBlurHandler: valueInputBlurHandler,
    reset: reset,
  };
};

export default useInput;
