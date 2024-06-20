import { useState } from "react";

const useValidation = (values) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!values.name) newErrors.name = "Name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (values.email && !/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Email is not valid";
    if (!values.age) newErrors.age = "Age is required";
    if (values.age && (isNaN(values.age) || values.age <= 0))
      newErrors.age = "Age must be a number greater than 0";
    if (values.attendingWithGuest && !values.guestName)
      newErrors.guestName = "Guest Name is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validate,
  };
};

export default useValidation;
