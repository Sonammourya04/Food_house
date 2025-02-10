import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import {MENU_API} from "../utils/constants";


const RestaurantMenu = ()=>{

 const [resInfo,setresInfo]=useState(null);

 const{resId}=useParams();




    useEffect(() =>{
        fetchMenu();
    },[]);

    const  fetchMenu = async ()=>{
        const data = await fetch(
            MENU_API+ 
            resId
    
            );
            const json= await data.json();
            console.log(json);
            setresInfo(json.data)
    };
    if(resInfo=== null){ 
        return<Shimmer/>;
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    const itemsCards =
  resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards;
console.log(itemsCards);

    


    return(
        <div className="menu">
             <h1>{name}</h1>
             <h1>{cuisines.join(",")}</h1>
             <h1>{costForTwoMessage}</h1>
             <p>Menu</p>
             <ul>
                <li >
                {itemsCards.map((items)=><li>{items.card.info.name} -          Rs{ items.card.info.price/100}</li>)}
                </li>
             </ul>
        </div>
       
    );
};
export default RestaurantMenu;