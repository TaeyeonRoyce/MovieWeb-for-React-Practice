import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import "./StickyHeader.css";
import {useState} from 'react';

function StickyHeader(props){

    const [selected, setSelected] = useState('star');

    const handleSelect = (e) => {
        setSelected(e.target.value);
        props.sorting(e.target.value);
    }

    return(
        <div className="stickyHeader__container">
            <div className="search__dummy">
            <AiOutlineSearch className="search__icon" /><input type="text" placeholder="Search Movies" className="search" />
            </div>
            <div className="selection__contaniner">
                <span className="sort__by">Sort by : </span>
                <select name="choice" onChange={handleSelect} value={selected}>
                    <option value="star" key="star">Star Rating</option>
                    <option value="yearfast" key="yearfast">Year-fast</option>
                    <option value="yearold" key="yearold">Year-old</option>
                </select>
            </div>
        </div>
    )
};

export default StickyHeader;