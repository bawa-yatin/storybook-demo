import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const MainInput = ({ size, type, label, name, placeholder, onChange }) => {
  return (
    <label className={`input-component input-component--${size}`}>
      <span>{label}</span>
      <input
        type={type === "text" ? "text" : "number"}
        step={type === "floating-point" ? "any" : undefined}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

MainInput.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  type: PropTypes.oneOf(["text", "number", "floating-point"]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

MainInput.defaultProps = {
  size: "medium",
  type: "text",
  label: "Enter a value",
  name: "input",
  placeholder: "Please enter a value",
  onChange: undefined,
};

export default MainInput;
