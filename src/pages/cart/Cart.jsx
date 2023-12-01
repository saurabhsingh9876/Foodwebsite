import React, { useState } from 'react';
import { useEffect } from 'react';
import './cart.css';
import { useSelector } from 'react-redux';
import Chakout from '../chakout/Chakout';
 import { useDispatch } from 'react-redux';
 import { removeFromCart } from '../../context/redux/Cartslice';
function Cart({ open, setopen }) {
const dispatch=useDispatch()
  const [openc,setopenc]=useState(false)
  const cartItem = useSelector((state) => state.cart.cart);
  
  console.log(cartItem.length);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup effect to reset the style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
    {openc?(<Chakout setopenc={setopenc} openc={openc}/>):(
    <div className='cart'>
      
     <div style={{display:'block'}}>
     <p style={{ float: 'left',fontSize:'25px' ,top:"0",marginBottom:'60px'}} onClick={() => setopen(false)}>
        ✖
      </p>
      <h2>Order Summary</h2>
      <p style={{marginTop:'50px',width:'100%',height:'30px',backgroundColor:'green',borderRadius:'3px',color:'white',alignItems:'center',paddingLeft:'50px',paddingTop:"8px"}}> Free delivery on all orders above ₹499</p>
      <p style={{marginTop:'7px',width:'100%',height:'30px',border:' 1px solid green',borderRadius:'3px',alignItems:'center',paddingLeft:'60px',paddingTop:"8px"}}> Congratulations! You've saved ₹42</p>
     </div>
     
      
     {cartItem.map((item) => (
        <div key={item.id} className='cartitem' style={{display:'flex',flexWrap:'nowrap'}}>
          
          <img src={item.image} alt=""  style={{width:'25%'}}/>
          <div style={{display:'block',fontFamily:'sans-serif',fontSize:'15px'}}>
          <p>{item.name}</p>
          <div style={{display:'flex'}}>
          <p style={{fontSize:'17px'}}>₹ {item.price}</p>
      
      <p style={{textDecoration:'line-through',fontWeight:"300",marginLeft:'10px'}}>₹ {item.oprice}</p>
          </div>
          
          </div>
          <button onClick={()=>dispatch(removeFromCart(item))} style={{width:'40px'}}>-</button>
          {/* <button onClick={()=>dispatch(removeFromCart(item))}>+</button> */}
          
        </div>
      ))}
    {/* <p>Total: {cartItem.reduce((total, item) => total + parseFloat(item.price), 0)}</p> */}
    {/* <div style={{position:"fixed"}}> */}
    <div className="cartm" >
    <button onClick={()=>setopenc(!openc)} className='cartm1'> Checkout </button>
     <button  className='cartm2'> Total {cartItem.reduce((total, item) => total + parseFloat(item.price), 0)}₹</button>
    </div>
   
    {/* </div> */}

  
     </div> 
      
    )}
    </>
  );
}

export default Cart;
