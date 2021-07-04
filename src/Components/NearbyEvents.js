import React, { Component } from 'react'
import {connect} from  'react-redux';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { getNearbyEvents } from '../Actions';


class NearbyEvents extends Component {

    componentDidMount(){
        this.props.dispatch(getNearbyEvents());
    }

    renderList = (events) => {
        console.log("Inside the renderlist of nearby events", events)
        if(events){
            return events.map((data)=>{
                return(
                    <>                      
                        <div className="col-md-4">                 
                          <Card.Body>
                            <Card.Title><h2>{data.name}</h2></Card.Title>
                            <Card.Text>
                                <h4>LANGUAGE: {data.language}</h4>
                                <h4>RATING: {data.rate}</h4>
                                <h4>TYPE: {data.type}</h4>  
                                <img src={data.imageUrl} alt="Movies" width='100px' height='100px'/>
                            </Card.Text>
                          </Card.Body>   
                        </div>
                    </>
                )
            })
        }
    }

    render() {
        return (
            <div>
            <br/><br/>
                <CardGroup>
                    <Card className="bg-dark text-white">
                    <Card.Header><h1><center><u>EVENTS NEAR YOU</u></center></h1></Card.Header>
                        <div className="row"> 
                            {this.renderList(this.props.events)}
                        </div>
                    </Card>  
                </CardGroup>              
            </div>
        )
    }
}

function mapStateToProps(state){  
    console.log("Inside mstp of NE",state)
    return{
      events:state.nearbyEvents
    }
  }

export default connect (mapStateToProps,null)(NearbyEvents);