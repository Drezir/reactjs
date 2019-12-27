import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherCustomButtonProps}) => (
    <button
        className={`
                ${inverted ? "inverted" : ""} 
                ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`
        }
        {...otherCustomButtonProps}>
        {children}
    </button>
);

export default CustomButton;