import React from 'react';
import "./LeftSidebar.css"
import { useMediaQuery } from 'react-responsive'

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import profileImage from "./UserProfileImage.png";

function LeftSidebar(){
    const isSmallLeftSidebar = useMediaQuery({ maxWidth: 780 })
    if (isSmallLeftSidebar){
        return (
            <div className="small__sidebar__container">
                <section className="small__profile__Box">
                    <img src={profileImage} alt="" className="small__profile__circle__image" />
                </section>
                <section className="small__sidebar__firstSection">
                    <div className="small__sidebar__context small__sidebar__clicked"><AiOutlineEye className="small__sidebar__icon "/></div>
                    <div className="small__sidebar__context"><AiOutlineStock className="small__sidebar__icon"/></div>
                    <div className="small__sidebar__context"><BiMovie className="small__sidebar__icon"/></div>
                    <div className="small__sidebar__context"><BiBell className="small__sidebar__icon"/></div>
                </section>
            </div>
        )
    } else{
        return(
            <div className="sidebar__container">
                <section className="profile__Box">
                    <h3 className="logo__text">Watch Moives</h3>
                    <img src={profileImage} alt="" className="profile__circle__image" />
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
}
export default LeftSidebar;