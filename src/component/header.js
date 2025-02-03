
import { useState ,useEffect} from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {

//use state
  let [btnNameReact,setbtnNameReact]=useState("Login");

  console.log("header render")

// if there is no dependency  array => useEffect is called on every render
//if dependency  array is empty =[]=>useEffect is called on initial render(just once)
// if dependency  array is[btnNameReact]=>called evertime btnNameReact is updated
  useEffect(()=>{
    console.log("useEffect  called")
  },[btnNameReact]);
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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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