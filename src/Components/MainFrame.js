import React from 'react';
import LeftSidebar from './LeftSidebar';

function MainFrame(props){
    return(
        <section className="container">
        <div className="main__view__container">
            <div className="leftsidebar">
                <LeftSidebar />
            </div>
            {props.views}
        </div>
        </section>
    )
};

export default MainFrame;