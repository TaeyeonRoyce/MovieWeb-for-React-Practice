import React from 'react';
import axios from 'axios';
import Movie from './Components/Movie';
import LeftSidebar from './Components/LeftSidebar';
import StickyHeader from './Components/StickyHeader';
import "./App.css";



class App extends React.Component{
  state = {
    isLoading: true,
    movie: []
  };
  getMovies = async () =>{
    const {data: {data: { movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({moives : movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, moives} = this.state;
    return(
      <section className="container">
        {isLoading ? 
          (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : 
          (
            <div className="main__view__container">
              <div className="leftsidebar">
                <LeftSidebar />
              </div>
              <div className="content__container">
                <StickyHeader />
                <div className="movies">
                
              {moives.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
              </div>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default App;
