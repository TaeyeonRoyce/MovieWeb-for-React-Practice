import React, { useState } from 'react';
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

function Home({isLoading, movies}){
  const [sortWay, setIsSortWay] = useState('star');
  const getSortWay = (data) => {
    setIsSortWay(data);
  };
  return(
    <div className="content__container">
        {isLoading ? (
            <Loading />
        ) : (
            <div className="moives__container"> 
                <StickyHeader sorting={getSortWay}/>
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

export default Home;
