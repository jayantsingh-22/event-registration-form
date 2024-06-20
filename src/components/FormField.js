import React from "react";

const FormField = ({ label, type, name, value, checked, onChange, error }) => {
  return (
    <div className="form-field">
      <label>
        {label}
        {type === "checkbox" ? (
          <input
            type={type}
            name={name}
            checked={checked}
            onChange={onChange}
          />
        ) : (
          <input type={type} name={name} value={value} onChange={onChange} />
        )}
      </label>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormField;
