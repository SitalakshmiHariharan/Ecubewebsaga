import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getSliderData } from '../Actions';


let Home = ({getSliderData}) => (
   
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home"><h2>Motion Pictures Of The World</h2></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="outline-info">Search</Button>
                </Navbar.Collapse>
            </Navbar>               
        </div>
    
)

const mapDispatchToProps = {
    getSliderData: getSliderData,
};

export default connect(null,mapDispatchToProps)(Home);
