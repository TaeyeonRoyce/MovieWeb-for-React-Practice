import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import "./StickyHeader.css";


function StickyHeader(){
    return(
        <div className="stickyHeader__container">
            <div className="search__dummy">
            <AiOutlineSearch className="search__icon" /><input type="text" placeholder="Search Movies" className="search" />
            </div>
            <select name="choice">
                <option value="first" defaultValue>Trending</option>
                <option value="second" disabled>Stars</option>
                <option value="third" disabled>Years</option>
            </select>
        </div>
    )
};

export default StickyHeader;