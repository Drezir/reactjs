import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({children, isGoogleSignIn, ...otherCustomButtonProps}) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherCustomButtonProps}>
        {children}
    </button>
);

export default CustomButton;