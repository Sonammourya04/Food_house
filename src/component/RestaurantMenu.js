import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{

 const [resInfo,setresInfo]=useState(null);



    useEffect(() =>{
        fetchMenu();
    },[]);

    const  fetchMenu = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.545246&lng=77.2941132&restaurantId=53769&submitAction=ENTER"
            );
            const json= await data.json();
            console.log(json);
            setresInfo(json.data)
    };
    if(resInfo=== null){ 
        return<Shimmer/>;
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    
    return(
        <div className="menu">
             <h1>{name}</h1>
             <h1>{cuisines.join(",")}</h1>
             <h1>{costForTwoMessage}</h1>
            
        </div>
       
    );
};
export default RestaurantMenu;