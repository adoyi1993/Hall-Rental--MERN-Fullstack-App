import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useParams } from 'react-router-dom';

const EditHall = () => {
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
  const {id} = useParams();

  useEffect(()=>{
    getHallByID();
    
  },[])

const getHallByID = async()=>{
    const response = await axios.get(`/api/v1/getHall/${id}`);
    console.log(response.data.phone)
    setName(response.data.name)
    setLocation(response.data.location)
    setRentPerDay(response.data.rentPerDay)
    setPhone(response.data.phone)
    setImage(response.data.image)
    setDescription(response.data.description)
    setisAvailable(response.data.isAvailable)
    setCarouselImage1(response.data.carouselImage1)
    setCarouselImage2(response.data.carouselImage2)
    setcarouselImage3(response.data.carouselImage3)
}



const url = `/api/v1/updateHall/${id}`
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
    await (axios.patch(url, newRoom).then((res)=>{console.log(res.data)}))
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
        <Button  type='submit'>Update Hall</Button>
       
      </ButtonGroup>
    </form>
  </div>
  )
}

export default EditHall

