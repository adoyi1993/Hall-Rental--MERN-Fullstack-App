import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Hall1 from "../Images/Hall1.jpg"
import Hall2 from "../Images/savvy1.jpeg"
import Hall3 from "../Images/savvy2.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Components/landing.css"
import Header from './Header';



const Landing = () => {
  
  return (

    <div style={{marginTop: "1px"}}>
      <Header/>
           
        <Card style={{position: "absolute", zIndex:999, marginTop: "200px", marginLeft:"30%", marginRight:"30%", opacity:0.9, background:"transparent", borderRight: "2px solid purple",  borderTop: "2px solid purple"}}>
      
      <Card.Body>
       
        <Card.Text>
            <h4 >Welcome Here</h4>
            <h2 className=''> <marquee behavior="scroll" direction="left">IT'S GOOD TO HAVE YOU HERE</marquee> </h2>
        </Card.Text>
        <Button variant="dark"> <Link style={{color: "white", textDecoration: "none"}} to="/getHalls">Rent a Hall</Link> </Button> 
        <Button variant="dark" style={{  marginLeft: "3px"}}> <Link style={{color: "white", textDecoration: "none"}} to="/contactUs">Contact Us</Link> </Button>
     
      </Card.Body>
    </Card>
    <div style={{  background: "blue", zIndex:39, position:"absolute", height:"100%", width:"100%", opacity: .5,}}> 
    <Carousel interval={1000} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hall1}
          alt="First slide"
          style={{opacity: 0.8}}
         
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hall2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hall3} 
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    
        </div>
        
       
    </div>
  )
}

export default Landing