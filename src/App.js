import React, { useState, useEffect } from 'react';
import Homepage from './Routes/Homepage';
import MovieDetailPage from './Routes/MovieDetailPage';
import { HashRouter, Route } from 'react-router-dom';
import LikedPage from './Routes/LikedPage';
import MyLibraryPage from './Routes/MyLibraryPage';
import ActivityPage from './Routes/ActivityPage';
import ProfilePage from './Routes/ProfilePage';
import axios from 'axios';


function App(){
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () =>{
    const {data: {data: { movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating&limit=40");
    setIsLoading(false);
    setMovies(movies);
  }
  useEffect(() => {
    getMovies()
  }, []);
  return(
    <HashRouter>
      <Route path="/" exact={true} render={() => <Homepage movies={movies} isLoading={isLoading}/>} />
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/library/" component={MyLibraryPage}/>
      <Route path="/like/" component={LikedPage}/>
      <Route path="/activity" component={ActivityPage}/>
      <Route path="/movie/:id" component={MovieDetailPage}/>

    </HashRouter>
  )
}

export default App;
