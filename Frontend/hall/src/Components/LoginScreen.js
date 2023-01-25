import React, {useState} from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import "../Components/LoginScreen.css"
  import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import Header from './Header';
import PublicHeader from './PublicHeader';

  

const LoginScreen = () => {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
 


  

  const submit = async(e)=>{
    e.preventDefault()
    if(!email || !password){
     setError("Please fill in all the required fields")
     
    }
    console.log(email, password)

    try {
      await axios.post("/api/v1/login", {
        email,
        password
      }).then(res=>{

        if(!res.ok){
          
        }
        console.log(res.data)
         if(res.data){
          setError("")
          history("/home")
          setEmail("")
          setPassword("")
          
        }
       
       
       
      }) 
    } catch (e) {
      console.log(e) 
    
    } 
  } 

  return (
    <>
   <PublicHeader/>
    <MDBContainer fluid>
     
      <MDBRow>
      <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80"
            alt="Login " className="w-100" style={{objectFit: 'cover', objectPosition: 'left', height: "100vh"}} />
        </MDBCol>
        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Hall Rental</span>
          </div>
          
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            <form >
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg1' type='email' size="lg" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg2' type='password' size="lg" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

            <button className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={submit}>Login</button>
            </form>
            {error?  <h6  style={{color: "red", textAlign: "center"}}>{error}</h6> : ""}
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <Link to="/signup">Register here</Link></p>

          </div>

        </MDBCol>

       

      </MDBRow>

    </MDBContainer>
    </>
  );
}



export default LoginScreen