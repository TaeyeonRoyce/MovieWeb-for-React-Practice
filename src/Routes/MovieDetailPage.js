import React from 'react';
import MovieDetail from './MovieDetail';
import MainFrame from '../Components/MainFrame';

class MovieDetailPage extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return(
                <MainFrame views={<MovieDetail movieData={location.state}/>} currentPage={'home'}/>
            )
        }else{
            return null
        }
    }
}

export default MovieDetailPage;