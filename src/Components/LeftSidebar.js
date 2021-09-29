import React from 'react';
import "./LeftSidebar.css"
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import { BiBell } from "react-icons/bi";

function LeftSidebar(){
    return (
        <div className="sidebar__container">
            <section className="profile__Box">
                <h3 className="logo__text">Watch Moives</h3>
                <img src="img/UserProfileImage.png" alt="" className="profile__circle__image" />
                <h6 className="profile__name">TaeYeon Royce</h6>
            </section>
            <section className="sidebar__firstSection">
                <div className="menu">Menu</div>
                <div className="sidebar__context sidebar__clicked"><AiOutlineEye className="sidebar__icon"/>Discover</div>
                <div className="sidebar__context"><AiOutlineStock className="sidebar__icon"/>Trending</div>
                <div className="sidebar__context"><BiMovie className="sidebar__icon"/>New Releases</div>
                <div className="sidebar__context"><BiBell className="sidebar__icon"/>Activity<span className="activity__counts">9</span></div>
            </section>
        </div>
    )
}
export default LeftSidebar;