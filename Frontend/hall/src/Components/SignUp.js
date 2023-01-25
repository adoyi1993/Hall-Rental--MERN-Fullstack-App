import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
  import {Link} from "react-router-dom"
import PublicHeader from './PublicHeader';
  

const SignUp = () => {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError]=  useState(null) 

  const submit = async(e)=>{
    e.preventDefault()
    if(!name || !email || !password){
      setError("please fill in all the required fields")
    }

    try {
      await axios.post("/api/v1/register", {
        name,
        email,
        password
      }).then(res=>{
         if(res.data){
         history("/login")
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

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
              <h2 style={{color: "black", marginLeft: "auto", marginRight: "auto"}} >Register with Us</h2>

            <form >
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='name' id='formControlLg1' type='text' size="lg" value={name} onChange={(e)=>setName(e.target.value)} required/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg2' type='email' size="lg" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg3' type='password' size="lg" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

            <button className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={submit}>Register</button>
            {error?  <h6  style={{color: "red", textAlign: "center"}}>{error}</h6> : ""}
            </form>

          
            <p className='ms-5'>Already have an account? <Link to="/login">Login here</Link></p>

          </div>

        </MDBCol>

       

      </MDBRow>

    </MDBContainer>
    </>
  );
}



export default SignUp