import React, { Component } from 'react';
import './search-box.style.css';

export const SearchBox = ({placeHolder, handleChange}) => (   
    <input 
        className="search"
        type="search" 
        placeholder={placeHolder} 
        onChange={handleChange}/>
);
