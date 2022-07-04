import React from 'react';
import PropTypes from "prop-types";
import './Button.css';

function Button({
  children,
  type,
  className,
  size,
  cancel,
  onClick,
  label,
  disabled = false,
  ...rest }) {
  return (
    <div className="">
      <button
      className={`btn btn-${type} ${className} btn-${size}-size${
        cancel ? " btn-cancel" : ""
      } btn-disabled-${disabled}`}
      onClick={(e) => {
        !disabled && onClick && onClick(e);
      }}
      disabled={disabled}
      {...rest}
    >
      {label}
      {children}
    </button>
    </div>
  )
}

export default Button;


Button.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  cancel: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  type: "normal",
  className: "",
  size: "md",
};
