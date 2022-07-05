import React from "react";
import "./InputField.scss";

const InputField = (props) => {
  const { inputName, inputType, placeholder, label, onChange } = props;
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
      />
    </div>
  );
};

export default InputField;