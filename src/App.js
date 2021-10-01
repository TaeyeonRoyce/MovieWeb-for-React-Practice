import React from 'react';
import Homepage from './Routes/Homepage';
import MovieDetailPage from './Routes/MovieDetailPage';
import { HashRouter, Route } from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <Route path="/" exact={true} component={Homepage}/>
        <Route path="/movie/:id" component={MovieDetailPage}/>
      </HashRouter>
    )
  }
}

export default App;
