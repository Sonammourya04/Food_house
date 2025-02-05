import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";


const Header = () => {

//use state
  let [btnNameReact,setbtnNameReact]=useState("Login");

  console.log("header render")

// if there is no dependency  array => useEffect is called on every render
//if dependency  array is empty =[]=>useEffect is called on initial render(just once)
// if dependency  array is[btnNameReact]=>called evertime btnNameReact is updated
 
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                        </li>
                    <li>
                       <Link to="/contact">Contact Us</Link> 
                        </li>
                    <li>Cart</li>
                    <button
                     className="login"
                    onClick={()=>{
                       btnNameReact==="Login"
                       ? setbtnNameReact("Logout")
                       : setbtnNameReact("Login");
                    }}
                    > 
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;