import React from 'react';
import MainFrame from '../Components/MainFrame';
import Liked from './Liked';


function LikedPage(){
    return(
        <MainFrame views={<Liked />} currentPage={'liked'}/>
    )
};

export default LikedPage;