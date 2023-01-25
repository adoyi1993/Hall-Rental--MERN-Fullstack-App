import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import "./header.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const Header = () => {
  let history = useNavigate()
  const logout = async() =>{
try {
await axios.get("/api/v1/logout")
    history("/login")
}
catch (error) {
console.log(error) 

} 
}

  
  return (
    <div className="md-6">
      <Navbar className='nav' bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand> <Link to="/" style={{ textDecoration:"none", color:"white"}}>HallRental</Link></Navbar.Brand>
          <Nav className="me-auto" >
          
            <Nav.Link  style={{marginLeft: "650px"}}> <Link to="/home" style={{ textDecoration:"none", color:"white"}}>Home</Link> </Nav.Link>
            <Nav.Link  style={{paddingLeft:"40px"}} ><Link to="/getHalls" style={{ textDecoration:"none", color:"white"}}>Rent a Hall</Link></Nav.Link>
            <Nav.Link  style={{paddingLeft:"40px"}} ><Link to="/contactUs" style={{ textDecoration:"none", color:"white"}}>ContactUS</Link></Nav.Link>
            <Nav.Link  style={{marginLeft:"130px"}}> <button onClick={logout}> Logout</button>  </Nav.Link>
           
          </Nav>

        </Container>
      </Navbar>
     
      </div>
  )
}

export default Header