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
  iconLeft,
  iconRight,
  iconCenter,
  styles,
  disabled = false,
  ...rest }) {
  return (
    <div className="">
      <button
        className={`btn btn-${type} ${className} btn-${size}-size${cancel ? " btn-cancel" : ""
          } btn-disabled-${disabled} btn-${styles}-styles`}
        onClick={(e) => {
          !disabled && onClick && onClick(e);
        }}
        disabled={disabled}
        {...rest}
      >
        <div className="button-icon-wrapper">
          {iconLeft && <div className="button-icon-item-wrapper">
            <img src={iconLeft} className="button-icon-item" alt="button_icon" />
          </div>
          }
          {iconRight && <div className="button-icon-item-wrapper">
            <img src={iconRight} className="button-icon-item" alt="button_icon" />
          </div>
          }
          {iconCenter &&
            <div className="button-icon-center-item-wrapper">
              <img src={iconCenter} className="button-icon-center-item" alt="button_icon" />
            </div>
          }
          {label && <div>{label}</div>}
        </div>
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
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  iconCenter: PropTypes.string,
  styles: PropTypes.string,
};

Button.defaultProps = {
  type: "normal",
  className: "",
  size: "md",
};
