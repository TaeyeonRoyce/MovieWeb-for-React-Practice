import React from 'react';
import Home from './Routes/Home';
import MovieDetail from './Routes/MovieDetail';
import { HashRouter, Route } from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/movie/:id" component={MovieDetail}/>
      </HashRouter>
    )
  }
}

export default App;
