import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Card, Button} from "react-bootstrap"
import HallCard from './HallCard'
import SearchBar from './SearchBar'
import Header from './Header'

// The Get all Hall Components where the halls in the database are fetched and mapped
const Halls = () => {
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
    <Header/>
    <SearchBar inputValue={search} onInputChange={handleSearch} />
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop:"15px"}}>

            

          {filteredHalls.length==0 ? (
            <h3 style={{textAlign: "center", color: "red"}}>No Halls Found!!</h3>
          ):(
            filteredHalls.map((hall)=>{
              return (
                <div className="hall" key={hall._id}  >
                    <HallCard {...hall} />
              </div>
  
              )
              
  
            })

          )}
                    
        


    </div>
    </>
  )
}

export default Halls