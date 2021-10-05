import React from 'react';
import MainFrame from '../Components/MainFrame';
import Activity from './Activity';


function ActivityPage(){
    return(
        <MainFrame views={<Activity />} currentPage={'activity'}/>
    )
};

export default ActivityPage;