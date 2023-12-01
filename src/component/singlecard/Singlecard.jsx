import React from 'react'
import { addtocart } from '../../context/redux/Cartslice';
import { useDispatch } from 'react-redux';
function Singlecard({currentItems,filteredData }) {


    const dispatch = useDispatch();
  return (

   <>
    {currentItems .map((item) => (
            <div key={item.name}>
              <img src={item.image} alt={item.name} style={{ height: '160px', width: '220px', borderRadius: '5px' }} />
              <button
                style={{ marginLeft: '-31px', padding: ' 5px 16px', color: 'crimson', backgroundColor: '#fff', borderRadius: '4px', border: 'none', boxShadow: '0px 0px 0px black', fontSize: '25px',}}
                onClick={() => dispatch(addtocart(item))}
              >
                {' '}
                +{' '}
              </button>
              <p>{item.name} </p>
              <p style={{ fontWeight: '300' }}>{item.opercent}% off</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: '17px' }}>{item.price}₹</p>
                <p style={{ paddingLeft: '28px', fontWeight: '300', fontSize: '14px', textDecoration: 'line-through' }}>{item.oprice}₹</p>
              </div>
            </div>
          ))}
   </>
  )
}

export default Singlecard