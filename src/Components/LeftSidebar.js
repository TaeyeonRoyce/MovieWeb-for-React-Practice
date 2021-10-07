import React from 'react';
import "./LeftSidebar.css"
import { useMediaQuery } from 'react-responsive'

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import profileImage from "./UserProfileImage.png";
import { Link } from 'react-router-dom';

function LeftSidebar(props){
    const isSmallLeftSidebar = useMediaQuery({ maxWidth: 780 });
    if (isSmallLeftSidebar){
        return (
            <div className="small__sidebar__container">
                <section className="small__profile__Box">
                    <Link to="/profile"><img src={profileImage} alt="" className="small__profile__circle__image" /></Link>
                </section>
                <div className="small__sidebar__divider"></div>
                <section className="small__sidebar__firstSection">
                    <Link to="/">
                        <div className={"small__sidebar__context "+(props.currentPage === "home" ? "small__sidebar__clicked" : null)}><AiOutlineEye className="small__sidebar__icon"/></div>
                    </Link>
                    <Link to="/library">
                        <div className={"small__sidebar__context "+(props.currentPage === "library" ? "small__sidebar__clicked" : null)}><BiArchive className="small__sidebar__icon"/></div>
                    </Link>
                    <Link to="/like">
                        <div className={"small__sidebar__context "+(props.currentPage === "liked" ? "small__sidebar__clicked" : null)}><AiOutlineHeart className="small__sidebar__icon"/></div>
                    </Link>
                    <Link to="/activity">
                        <div className={"small__sidebar__context "+(props.currentPage === "activity" ? "small__sidebar__clicked" : null)}><BiBell className="small__sidebar__icon"/></div>
                    </Link>
                </section>
            </div>
        )
    } else{
        return(
            <div className="sidebar__container">
                <section className="profile__Box">
                    <h3 className="logo__text">Watch Moives</h3>
                    <Link to="/profile" className="profile__circle__image__link">
                        <img src={profileImage} alt="" className="profile__circle__image" />
                    </Link>
                    <h6 className="profile__name">TaeYeon Royce</h6>
                </section>
                <div className="sidebar__divider"></div>
                <section className="sidebar__firstSection">
                    <div className="menu">Menu</div>
                    <Link to="/">
                        <div className={"sidebar__context "+(props.currentPage === "home" ? "sidebar__clicked" : null)}><AiOutlineEye className="sidebar__icon"/>Discover</div>
                    </Link>
                    <Link to="/library">
                        <div className={"sidebar__context "+(props.currentPage === "library" ? "sidebar__clicked" : null)}><BiArchive className="sidebar__icon"/>My Library</div>
                    </Link>
                    <Link to="/like">
                        <div className={"sidebar__context "+(props.currentPage === "liked" ? "sidebar__clicked" : null)}><AiOutlineHeart className="sidebar__icon"/>Liked</div>
                    </Link>
                    <Link to="/activity">
                        <div className={"sidebar__context "+(props.currentPage === "activity" ? "sidebar__clicked" : null)}><BiBell className="sidebar__icon"/>Activity<span className="activity__counts">9</span></div>
                    </Link>
                </section>
            </div>
        )
    }
}
export default LeftSidebar;