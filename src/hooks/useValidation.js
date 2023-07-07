import React, { useCallback } from 'react';
import { USER_EMAIL_REGEX } from "../constants/Constants";

export default function useFormWithValidation() {

  const [values, setValues] = React.useState({});
  const [checkes, setChecked] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const check = target.checked;
    if (name === "email" && !value.match(USER_EMAIL_REGEX)) {
      target.setCustomValidity("Введен не валидный адрес электронной почты");
    }
    else {
      target.setCustomValidity("");
    }
    setValues({...values, [name]: value});
    setChecked({...checkes, [name]: check});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newCheckes = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setChecked(newCheckes);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setChecked, setErrors, setIsValid]
  );

  return { values, checkes, errors, isValid, handleChange, resetForm, setValues, setChecked };
}
