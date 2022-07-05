import React from "react";
import "./InputField.scss";

const InputField = (props) => {
  const { inputName, inputType, placeholder, label, onChange, value } = props;
  return (
    <div className="input">
      <label className="input__label" htmlFor={inputName}>
        {label}
      </label>
      <input
        className="input__input"
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;