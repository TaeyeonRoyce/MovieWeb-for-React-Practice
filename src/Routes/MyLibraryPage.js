import React from 'react';
import MainFrame from '../Components/MainFrame';
import MyLibrary from './MyLibrary';


function MyLibraryPage(){
    return(
        <MainFrame views={<MyLibrary />} currentPage={'library'}/>
    )
};

export default MyLibraryPage;