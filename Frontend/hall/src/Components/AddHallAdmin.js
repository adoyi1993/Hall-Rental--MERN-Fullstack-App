import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from  "react-router-dom"
import {Card, Button} from "react-bootstrap"
import HallCard from './HallCard'
import SearchBar from './SearchBar'
import EditHallMain from './EditHallMain'


// The Get all Hall Components where the halls in the database are fetched and mapped
const AddHallAdmin = () => {
      const [halls, setHalls] = useState([])
      const [search, setSearch] = useState("")
      const [filteredHalls, setFilteredHalls] = useState([])
      

    const handleSearch = (e)=>{
       
        setSearch(e.target.value)

    }  

    // The Fetch Halls Function
    const fetchHalls = async ()=>{
  
        try {
            let res = await axios.get("/api/v1/getHalls")
            let data = res.data
            setHalls(data)
            console.log(data)
    
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
       fetchHalls()
       setFilteredHalls(
          halls.filter((hall)=> hall.name.toLowerCase().includes(search.toLowerCase()))
       )
    
    },[search, halls])
    

  return (
    <>
    
    <SearchBar inputValue={search} onInputChange={handleSearch} />
    <Button variant="dark"  style={{marginLeft: "100px", marginTop:"10px"}}> <Link style={{textDecoration:"none", color:"white"}} to="/addHall"> Add Hall </Link>

</Button>
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop:"15px"}}>

            

          {filteredHalls.length==0 ? (
            <h3 style={{textAlign: "center", color: "red"}}>No Halls Found!!</h3>
          ):(
            filteredHalls.map((hall)=>{
              return (
                <div className="hall" key={hall._id}  >
                    <EditHallMain {...hall} />
              </div>
  
              )
              
  
            })

          )}
                    
        


    </div>
    </>
  )
}

export default AddHallAdmin