import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Styles/slider.css';
import Slider from 'react-slick';
import {connect} from  'react-redux';
import { getSliderData } from '../Actions'


class MovieSlider extends Component {

  componentDidMount(){
    this.props.dispatch(getSliderData());
  }

  showSlider = (slider) => {
    console.log("It has reached the showSlider", slider)
    if(slider){    
      return slider.map((item) => {
              return(
                <>
                  <center>
                  <img width="100%" height="500px" src={item.image} alt='MovieImage'/>
                  </center>
                </>
            )})}   
    }
  

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true
  };
    return(
      <div className="App" style={{padding:100}}>
        <h2><center> MOVIES THAT MAY PIQUE YOUR INTEREST </center></h2>
        <Slider {...settings}>
          {this.showSlider(this.props.slider)}
        </Slider>
      </div>
    )
  }
}
     
const mapStateToProps = (state) => (
  {  
    slider: state.sliderData        
  })
 
export default connect(mapStateToProps,null)(MovieSlider); 

