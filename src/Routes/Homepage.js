import React from 'react';
import MainFrame from '../Components/MainFrame';
import Home from './Home';

function Homepage(){
    return(
        <MainFrame views={<Home />} currentPage={'home'}/>
    )
};

export default Homepage;