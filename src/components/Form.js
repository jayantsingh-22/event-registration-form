import React from "react";
import FormField from "./FormField";
import Summary from "./Summary";
import useForm from "../hooks/useForm";
import useValidation from "../hooks/useValidation";

const Form = () => {
  const { values, handleChange, handleSubmit, resetForm } = useForm({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: false,
    guestName: "",
  });

  const { errors, validate } = useValidation(values);

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FormField
        label="Name"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        label="Age"
        type="number"
        name="age"
        value={values.age}
        onChange={handleChange}
        error={errors.age}
      />
      <FormField
        label="Are you attending with a guest? "
        type="checkbox"
        name="attendingWithGuest"
        checked={values.attendingWithGuest}
        onChange={handleChange}
      />
      {values.attendingWithGuest && (
        <FormField
          label="Guest Name"
          type="text"
          name="guestName"
          value={values.guestName}
          onChange={handleChange}
          error={errors.guestName}
        />
      )}

      <button type="submit">Submit</button>
      <button type="reset" onClick={resetForm}>
        Reset
      </button>
      {values.submitted && <Summary formData={values} />}
    </form>
  );
};

export default Form;
