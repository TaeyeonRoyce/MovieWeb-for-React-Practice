import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronLeftCircle } from 'react-icons/bi';
import './MovieDetail.css';

function MovieDetail({movieData}){
    const { year, title, poster, summary, genres } = movieData;
    return(
        <div className="content__container">
            <div className="stickyHeader__container">
                <Link to="/">
                <BiChevronLeftCircle className="backward__arrow"/>
                </Link>
            </div>
            <div className="movie__detail__container">
                <img src={poster} alt={title} title={title} className="movie__detail__image"/>
                <div className="movie__detail__data">
                    <h3 className="movie__detail__title">{title}</h3>
                    <h5 className="movie__detail__year">{year}</h5>
                    <div className="detail__genres__container">
                        {genres.map((genre, index) => (
                        <li key={index} className="detail__genres__genre">{genre}</li>
                    ))}
                    </div>
                    <p className="movie__detail__summary">{summary}</p>
                    
                </div>
            </div>
        </div>
        )
    }


export default MovieDetail;