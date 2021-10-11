import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SmallProfilePage from '../Components/SmallProfilePage'
import NormalProfilePage from '../Components/NormalProfilePage'
import './Profile.css';

function Profile(){
    const isSmallProfilePage = useMediaQuery({ maxWidth: 780 });
    if (isSmallProfilePage){
        return(
            <SmallProfilePage />
        )
    }else{
        return(
            <NormalProfilePage />
        )
    }
    
}
export default Profile;