import React from 'react';
import MainFrame from '../Components/MainFrame';
import Profile from './Profile';


function ProfilePage(){
    return(
        <MainFrame views={<Profile />} currentPage={'profile'}/>
    )
};

export default ProfilePage;