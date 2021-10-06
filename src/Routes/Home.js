import React from 'react';
import axios from 'axios';
import Movie from '../Components/Movie';
import StickyHeader from '../Components/StickyHeader';
import Loading from '../Components/Loading';
import "./Home.css";

const sortTypes = {
  star: {
    sortfunc: (a, b) => b.rating - a.rating
  },
  yearfast: {
    sortfunc: (a, b) => b.year - a.year 
  },
  yearold: {
    sortfunc: (a, b) => a.year - b.year
  }
};

class Home extends React.Component{
  state = {
    isLoading: true,
    movie: [],
    sortWay: "star"
  };
  getSortWay = (data) => {
    this.setState({sortWay: data});
  }
  getMovies = async () =>{
    const {data: {data: { movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating&limit=40");
    this.setState({movies : movies, isLoading : false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies, sortWay } = this.state;
    console.log(sortWay);
    return(
      <div className="content__container">
          {isLoading ? (
              <Loading />
          ) : (
              <div className="moives__container"> 
                  <StickyHeader sorting={this.getSortWay}/>
                  <div className="movies">
                  {(movies.sort(sortTypes[sortWay].sortfunc)).map(movie => (
                      <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                      rating={movie.rating}
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
