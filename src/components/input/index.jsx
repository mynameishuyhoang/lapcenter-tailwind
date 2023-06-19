import React from "react";

const Input = ({ type, val, handleChange, placeholder, className, field, isTextarea, rows }) => {
    return (
        <>
            {
                isTextarea ?
                    <textarea
                        type={type}
                        rows={rows}
                        value={val}
                        onChange={(e) => handleChange(e.target.value, 'address')}
                        placeholder={placeholder}
                        className={className}
                    />
                    :
                    <input
                        type={type}
                        value={val}
                        onChange={(e) => handleChange(e.target.value, field)}
                        placeholder={placeholder}
                        className={className}
                    />
            }
        </>
    )
}

export default Input