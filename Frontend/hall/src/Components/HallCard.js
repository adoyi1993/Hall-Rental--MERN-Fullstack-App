import React, {useState, useRef}  from 'react'
import  PaystackPop  from '@paystack/inline-js';
import {Card, Button, Modal, Carousel, Form} from "react-bootstrap"
import {FaPhoneAlt} from "react-icons/fa"
import {TbCurrencyNaira} from "react-icons/tb"


// The Hall Component Card that represents one Hall and was mapped to produce other halls

const HallCard = ({name, description, isAvailable, location, phone, rentPerDay, image, carousalImages }) => {

  // The States for the More details Model and for the Payment Form
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [numberOfDays, setNumberOfDays] = useState("")
   
    
    

   
// The Paystack Payment Function
  const PaystackPayment = (e) => {
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key: "pk_test_9abbe91472dfc9d57ba291a64ed8c295c669ca39",
        amount:  numberOfDays* rentPerDay * 100,
        email,
        firstname: `${name},`,
        lastname,
        numberOfDays,
       
     
        onSuccess(transaction){
            let message = `Payment Complete! for ${name}, Reference ${transaction.reference}, You can also reach out to ${phone} for a more swifter response.` 
            alert(message)
            console.log(firstname, lastname)
            setEmail("")
            setFirstname("")
            setLastname("")
            setNumberOfDays("")
           
        
             
        },
        onCancel(){
            alert("You have cancel the transaction")
        }

    })}
  

   
  




  return (
    <>
            
        <Card style={{ width: '23rem' , marginLeft: "30px", marginTop: "30px", height: "40rem"}}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
           <Card.Title>{name}</Card.Title>
          <Card.Text>
                {description}
          </Card.Text>
         

        <div >
         <div className="details" >
              
        {isAvailable ? (<h4 style={{color: "green"}}>Available</h4>):(<h4 style={{color: "red"}}>Not Available</h4>)}
       
        <div style={{display: "flex"}}>
        <h5><FaPhoneAlt/> {phone}</h5>
        <h5 style={{marginLeft: "63px"}}><TbCurrencyNaira/>{rentPerDay}/Day</h5>
        </div>

        {isAvailable? (<Button variant="primary" onClick={handleShow1} style={{marginLeft: "5px"}}> 
                Rent Hall
                </Button>):(<Button variant="warning" onClick={()=>alert(`Hall is Currently Unavailable for more details please contact ${phone}`)} style={{marginLeft: "5px"}}> 
                Rent Hall
                </Button>)}
        
  
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"green"}}>  <TbCurrencyNaira size={30} style={{color:"green"}}/>{rentPerDay}/ Day</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoFocus 
                /> <br />

              <Form.Label>Number of Days</Form.Label>
                <Form.Control 
                type="number"
                placeholder="Enter number of days you need the hall" 
                value={numberOfDays}
                onChange={(e)=>setNumberOfDays(e.target.value) }
               />
                <br />


                <Form.Label>Total amount to be paid</Form.Label>
                <Form.Control 
                type="number"
                value={numberOfDays * rentPerDay}
                
            disabled  /> <br />
  
                <Form.Label>Hall Name</Form.Label>
                <Form.Control 
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e)=>setFirstname(e.target.value)}
                required disabled/>

                <br />
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Last Name" 
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
                required/>
              
              
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" type='submit' onClick={PaystackPayment} >
             Pay Now
            </Button>
          </Modal.Footer>
        </Modal>




<Button variant="danger"  style={{marginLeft: "5px"}}> <a href={location} style={{textDecoration: "none", color: "white"}}  target="_blank">Locate Hall</a></Button>
<>
<Button variant="dark" onClick={handleShow} style={{marginLeft: "5px"}}>
More Details
</Button>



<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>{name}</Modal.Title>
</Modal.Header>
<Modal.Body>
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src={carousalImages[0]}
alt="First slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={carousalImages[1]}
alt="Second slide"
/>


</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={carousalImages[2]}
alt="Third slide"
/>

</Carousel.Item>
</Carousel>

</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
  Close
</Button>
</Modal.Footer>
</Modal>
    </>
        </div>
        </div>

         </Card.Body>
        </Card>
    </>
  )
}

export default HallCard