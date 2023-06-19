import React from "react";


const Button = ({ handleClick, className, textStyle, btnText, type, isDisabled }) => {
    const btnStyles =
        type === 'primary'
            ?
            `bg-green-500 rounded 
            ${isDisabled
                ? 'bg-emerald-400 cursor-not-allowed'
                : 'hover:bg-green-600 cursor-pointer '}`
            :
            `bg-red-500 rounded 
            ${isDisabled
                ? 'bg-red-400 cursor-not-allowed'
                : 'hover:bg-red-600 cursor-pointer '}`
    return (
        <div className={`${className} ${btnStyles}`}>
            <p className={textStyle}
                onClick={handleClick}>{btnText}</p>
        </div >
    )
}

export default Button