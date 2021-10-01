import React from 'react';
import axios from 'axios';
import Movie from '../Components/Movie';
import LeftSidebar from '../Components/LeftSidebar';
import StickyHeader from '../Components/StickyHeader';
import Loading from '../Components/Loading';
import "./Home.css";



class Home extends React.Component{
  state = {
    isLoading: true,
    movie: []
  };
  getMovies = async () =>{
    const {data: {data: { movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating&limit=40");
    this.setState({moives : movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, moives } = this.state;
    return(
      <div className="content__container">
          {isLoading ? (
              <Loading />
          ) : (
              <div className="moives__container"> 
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
              )
          }
      </div>
    )
  }
}

export default Home;
