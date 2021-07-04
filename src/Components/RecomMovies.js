import React, { Component } from 'react'
import {connect} from  'react-redux';
import '../Styles/recommovies.css';
import { getRecomMovies } from '../Actions'


class RecomMovies extends Component {

    componentDidMount(){
        this.props.dispatch(getRecomMovies());
    }

    recomrenderList = (recomMovie) => {
        console.log("It has reached the recomrenderList", recomMovie)
            if(recomMovie){
                return recomMovie.map((data) =>{
                    return(
                        <>
                        <div className="col-md-4">
                            <div className='card text-center'>
                                <div className='overflow'>
                                    <img src={data.imageUrl} alt='Movie Name' />
                                </div>
                                <div className="card-body text-dark">
                                    <h4 className="card-title">{data.name}</h4>
                                    <p className="card-text text-secondary">
                                        {data.desc}
                                    </p>
                                    <a href={`/book/${data.name}/${data._id}/`} className="btn btn-outline-info"> Book Now </a>
                                </div>
                            </div>
                         </div>
                        </>
                    );
                })
            }
        }
      

    render() {
        return(
            <div className ="home">
                <hr />
                <center><h1> RECOMMENDED MOVIES</h1></center>  
                <div className="container-fluid d-flex justify-content-center">                           
                <div className="row">                    
                        {this.recomrenderList(this.props.recomMovie)}                                         
                </div>
                </div>
            </div>
        )
    }
}
 

function mapStateToProps(state){    
    return{
        recomMovie:state.recomMovies
      }
    }


export default connect (mapStateToProps,null)(RecomMovies);




