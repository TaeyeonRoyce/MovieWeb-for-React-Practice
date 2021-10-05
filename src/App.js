import React from 'react';
import Homepage from './Routes/Homepage';
import MovieDetailPage from './Routes/MovieDetailPage';
import { HashRouter, Route } from 'react-router-dom';
import LikedPage from './Routes/LikedPage';
import MyLibraryPage from './Routes/MyLibraryPage';
import ActivityPage from './Routes/ActivityPage';


class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <Route path="/" exact={true} component={Homepage}/>
        <Route path="/library/" component={MyLibraryPage}/>
        <Route path="/like/" component={LikedPage}/>
        <Route path="/activity" component={ActivityPage}/>
        <Route path="/movie/:id" component={MovieDetailPage}/>

      </HashRouter>
    )
  }
}

export default App;
