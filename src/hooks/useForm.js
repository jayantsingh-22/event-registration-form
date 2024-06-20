import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState({ ...initialValues, submitted: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    setValues((prevValues) => ({
      ...prevValues,
      submitted: true,
    }));
  };

  const resetForm = () => {
    setValues({ ...initialValues, submitted: false });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
