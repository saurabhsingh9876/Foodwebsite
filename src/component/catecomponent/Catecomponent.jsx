import React from 'react'
import './Catecomponent'
import Dropdown from 'react-bootstrap/Dropdown';
import {data} from '../data/data'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
function Catecomponent() {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          <img src="https://www.licious.in/image/rebranding/svg/categories-grey.svg" alt="" />category
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
          {data.map((item, index) => (
            <Link to={`./category/${item.name}`} style={{ textDecoration: 'none'}}>
             <Dropdown.Item key={index} href={`#${item.name}`}>
            <img src={item.image} alt={item.name} style={{ marginRight: '10px', height: '20px' }} />
            {item.name}
          </Dropdown.Item></Link>
         
        ))}
            
          </Dropdown.Menu>
        </Dropdown>
      );
    }

export default Catecomponent