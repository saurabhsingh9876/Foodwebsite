import React from 'react'
import './search.css'
import { IoIosSearch } from "react-icons/io";
function Search() {
  return (
   <>
    <input
              type="text"
               placeholder=" Search for any delicious product"
               className="input"
            //    value={quary}
            //   onChange={handleInputChange}
            />
             <IoIosSearch style={{ marginLeft: "-25px", fontSize: "25px" }} /></>
  )
}

export default Search