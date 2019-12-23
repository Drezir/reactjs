import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({children, ...otherCustomButtonProps}) => (
    <button className="custom-button" {...otherCustomButtonProps}>
        {children}
    </button>
);

export default CustomButton;