import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Container/Home';
import MovieSlider from './MovieSlider';
import Loading from '../Container/Loading';
import RecomMovies from './RecomMovies';
import Options from './Options';


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Home/> 
                    <Loading /> 
                    <Options />                    
                    <MovieSlider />   
                    <RecomMovies />                   
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;