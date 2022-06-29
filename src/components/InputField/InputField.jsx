import React from "react";
import "./InputField.scss";

const InputField = (props) => {
  const { inputName, inputType, placeholder, label } = props;
  return (
    <div className="input">
      <div className="new-input">
        <label className="input__label" htmlFor={inputName}>
          {label}
        </label>
        <input
          className="input__input"
          type={inputType}
          name={inputName}
          placeholder={placeholder}
          id=""
        />
      </div>
    </div>
  );
};

export default InputField;
