
import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css'
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../../pages/cart/Cart";
import Dropdownn from "../dropdown/Dropdownn";
import Catecomponent from "../catecomponent/Catecomponent";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";


function Navbar({ handleInputChange, quary}) {
	const navRef = useRef();
   const [open, setopen] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
       <Link to={`./`}>
			<div className="logo" >
           <img  style={{height:'28px'}}
             src="https://www.licious.in/image/rebranding/svg/licious-logo.svg"
             alt="logo" 
           />
        </div></Link>
			<nav ref={navRef}>
      <ul className="navmid" style={{ marginLeft: "5%",display:"flex"}}>
             <li>
               <Dropdownn style={{ padding: "20px" }} />
            </li>
            
          <input
              type="text"
               placeholder=" Search for any delicious product"
               className="input"
               value={quary}
              onChange={handleInputChange}
            />
             <IoIosSearch  className="io" style={{ marginLeft: "-25px", fontSize: "25px" }}
               />

           
             <li>
               <Catecomponent style={{ padding: "20px" }} />
             </li>
           </ul>
           <div className="rightnav" style={{marginLeft:"5rem"}}>
           <button className="cartn" onClick={() => setopen(!open)} style={{marginLeft:"20px"}}>
             <img
               src="https://www.licious.in/image/rebranding/svg/cart.svg"
               alt=""
            />
             {cartItem.length}+
           </button>
           {open ? <Cart open={open} setopen={setopen} /> : null}

        </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<RxCross2 />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
        <GiHamburgerMenu />
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export default Navbar;