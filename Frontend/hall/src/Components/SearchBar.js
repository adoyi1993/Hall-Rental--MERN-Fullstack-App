import React from 'react'
import "../Components/SearchBar.css"
import { MDBCol} from "mdbreact";


const SearchBar = ({inputValue, onInputChange}) => {
  return (
    <MDBCol md="6"  style={{marginLeft: "25%" , marginTop: "30px"}}>
      <div className="input-group md-form form-sm form-1 pl-0" >
        <div className="input-group-prepend">
          
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search for Hall"
          aria-label="Search"
          style={{textAlign: "center", borderRadius:"10px"}}
          onChange={onInputChange}
          value={inputValue}

        />
      </div>
    </MDBCol>
  )
}

export default SearchBar