import React, { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import close from '../../../assets/icons/close.png';
import tick from '../../../assets/icons/tick.png';
import './input.css';

function Input({
    children,
    type,
    failed,
    className,
    icon,
    innerIcon,
    error,
    direction,
    size = "md",
    hint,
    label,
    placeholder = " ",
    required = false,
    focus = false,
    style = {},
    parentStyle = {},
    toolbar = false,
    title = "",
    ...rest
}) {
    const [isEditing, setEditing] = useState(focus);
    const inputRef = useRef(null);

    const toggleEditing = () => {
        setEditing(!isEditing);
    };
    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    let paddingLeft = 16;
    if (innerIcon) paddingLeft += 32;
    if (error) paddingLeft += 32;
    if (icon) paddingLeft += 32;

    return (
        <React.Fragment>
            <div
                className="form-wrapper"
                style={{
                    width: "100%",
                    backgroundColor: toolbar ? "" : "#fff",
                    ...parentStyle,
                }}
            >
                <input
                    max="6"
                    min="0"
                    required={required}
                    onBlur={() => setEditing(false)}
                    ref={inputRef}
                    placeholder={placeholder}
                    className={`input-field  input-${type} ${error ? `input-error-${!!error.error}` : ""
                        } ${className} input-${size}-size form-field `}
                    style={{
                        paddingLeft: paddingLeft + "px",
                        ...style,
                    }}
                    type={type}
                    {...rest}
                />

                <label
                    style={{ backgroundColor: toolbar ? "#f7f8fc" : "", left: !icon ? "10px" : "40px" }}
                    onClick={toggleEditing}
                    className="form-label"
                >
                    {label}
                    {title ? <span style={{ fontWeight: "bold" }}> در {title}</span> : ""}
                    {required && <span className="field-required">*</span>}
                </label>

                {(error || innerIcon || icon) && (
                    <div className="input-inner-icon">
                        {error && (
                            <div className="input-icon-wrapper">
                                {!!error.error ? <img src={close} /> : <img src={tick} />}
                            </div>
                        )}
                        {innerIcon}
                        {icon}
                    </div>
                )}
                {hint !== false && (
                    <div
                        className={`hint-message input-${size}-size ${error ? `error-message-${!!error.error}` : ""
                            }`}
                    >
                        {error ? error.message : hint}
                    </div>
                )}
            </div>
            {children}
        </React.Fragment>
    )
}

export default Input;

Input.propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    size: PropTypes.string,
    failed: PropTypes.string,
    label: PropTypes.string,
};

Input.defaultProps = {
    className: "",
    type: "normal",
    size: "md",
};
