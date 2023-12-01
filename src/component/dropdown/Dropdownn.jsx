import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './dropdownn.css'
import React from 'react'

function Dropdownn() {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            City
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Banglore</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Ahemdabad</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

export default Dropdownn