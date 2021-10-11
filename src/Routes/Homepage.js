import React from 'react';
import MainFrame from '../Components/MainFrame';
import Home from './Home';

function Homepage({ isLoading, movies }){
    return(
        <MainFrame views={<Home movies={movies} isLoading={isLoading}/>} currentPage={'home'} />
    )
};

export default Homepage;