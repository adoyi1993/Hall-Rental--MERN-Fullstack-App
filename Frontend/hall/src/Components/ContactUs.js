import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Header from './Header';


// The Contact US Component

const ContactUs = () => {
  return (
    <>
    <Header/>
    <div  style={{marginTop: "50px", marginLeft:"600px", marginRight:"600px", border:"1px solid gray", borderRadius:"15px", width:"500px", height:"530px"}}>
        <h1 style={{textAlign: "center"}}>Contact Us</h1>

        <Form className="md-6" style={{marginTop: "20px", marginLeft: "10px", marginRight: "10px"}} method='POST' action='https://getform.io/f/1840ce05-55fb-4c03-bc1c-d7992c36f336'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>First Name</Form.Label>
        <Form.Control name='firstname' type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name='lastname' type="text" placeholder="Enter Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        
      <FloatingLabel controlId="floatingTextarea2" label="Leave Your Comment or complain here!">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          name= "textarea"
        />
      </FloatingLabel>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Talk to Us
      </Button>
    </Form>
    </div>
    </>
  )
}

export default ContactUs