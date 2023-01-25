import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const AddHall = () => {
  const [name, setName] = useState()
  const [location, setLocation] = useState()
  const [rentPerDay, setRentPerDay] = useState()
  const [phone, setPhone] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()
  const [carouselImage1, setCarouselImage1] = useState("")
  const [carouselImage2, setCarouselImage2] = useState("")
  const [carouselImage3, setcarouselImage3] = useState("")
  const [isAvailable, setisAvailable] = useState()

const url = "/api/v1/addHall"
const newRoom = {

  name,
  image,
  location,
  rentPerDay,
  description,
  isAvailable,
  phone,
  carousalImages: [carouselImage1, carouselImage2, carouselImage3 ]
  

} 
const submit = async () =>{
  
 
  try {
    await (axios.post(url, newRoom).then((res)=>{console.log(res.data)}))
  setName("")
  setImage("")
  setLocation("")
  setRentPerDay("")
  setDescription("")
  setisAvailable("")
  setPhone("")
  setCarouselImage1("")
  setCarouselImage2("")
  setcarouselImage3("")

  } catch (error) {
    console.log(error)
  }
 
}


  return (
    <div className='bg-dark' style={{display: "flex", jusifyContent: "center", margin:"auto", width:"50%", backgroundColor: "orangered", marginTop:"5px" }} >

    <form onSubmit={submit} style={{margin: "auto", width: "500px", marginTop:"20px"}}>
    <FloatingLabel controlId="floatingInput" label="Name:" name="name" className="mb-3" >
      <Form.Control type="text" placeholder="Enter hall Name" value={name} onChange={(e)=>setName(e.target.value)} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Location:" name="location" className="mb-3">
      <Form.Control type="text" placeholder="location" value={location} onChange={(e)=>setLocation(e.target.value)} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="enter image link"  name= "image" className="mb-3">
      <Form.Control type="text" placeholder="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
    </FloatingLabel>


    <FloatingLabel controlId="floatingInput" label="Rent per Day:"  name="rentPerDay" className="mb-3">
      <Form.Control type="number" placeholder="rent per day" value={rentPerDay} onChange={(e)=>setRentPerDay(e.target.value)} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Description:" name="description" className="mb-3">
      <Form.Control type="text" placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
    </FloatingLabel>


    <FloatingLabel controlId="floatingInput" label="Phone:" name="phone" className="mb-3">
      <Form.Control type="number" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="isAvailable" name="isAvailable" className="mb-3">
      <Form.Control type="text" placeholder="isAvailable" value={isAvailable} onChange={(e)=>setisAvailable(e.target.value)} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Carousel Image1" name="carouselImage1" className="mb-3">
      <Form.Control type="text" placeholder="carosel"  value={carouselImage1} onChange={(e)=>setCarouselImage1(e.target.value)}/>
    </FloatingLabel>

    <FloatingLabel controlId="floatingInput" label="Carousel Image2" name="carouselImage2" className="mb-3">
      <Form.Control type="text" placeholder="carosel"  value={carouselImage2} onChange={(e)=>setCarouselImage2(e.target.value)}/>
    </FloatingLabel>


    <FloatingLabel controlId="floatingInput" label="Carousel Image3" name="carouselImage3" className="mb-3">
      <Form.Control type="text" placeholder="carosel" value={carouselImage3} onChange={(e)=>setcarouselImage3(e.target.value)} />
    </FloatingLabel>

    <ButtonGroup className="mb-2">
        <Button  type='submit'>Add Hall</Button>
       
      </ButtonGroup>
    </form>
  </div>
  )
}

export default AddHall

