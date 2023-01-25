import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import "./header.css"

const PublicHeader = () => {
  return (
    <div className="md-6">
      <Navbar className='nav' bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand> <Link to="/" style={{ textDecoration:"none", color:"white"}}>HallRental</Link></Navbar.Brand>
          <Nav className="me-auto" >
          
            <Nav.Link  style={{paddingLeft:"1200px"}} ><Link to="/signup" style={{ textDecoration:"none", color:"white"}}>Register</Link></Nav.Link>
           
          </Nav>

        </Container>
      </Navbar>
     
      </div>
  )
}

export default PublicHeader