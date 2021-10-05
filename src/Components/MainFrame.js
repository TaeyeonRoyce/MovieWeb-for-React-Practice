import React from 'react';
import LeftSidebar from './LeftSidebar';

function MainFrame(props){
    return(
        <section className="container">
        <div className="main__view__container">
            <div className="leftsidebar">
                <LeftSidebar currentPage={props.currentPage} />
            </div>
            {props.views}
        </div>
        </section>
    )
};

export default MainFrame;