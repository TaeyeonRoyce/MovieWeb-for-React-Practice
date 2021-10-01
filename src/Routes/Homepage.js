import React from 'react';
import MainFrame from '../Components/MainFrame';
import Home from './Home';

function Homepage(){
    return(
        <MainFrame views={<Home />} />
    )
};

export default Homepage;