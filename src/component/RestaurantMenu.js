import {useState,useEffect} from "react";

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
     const[name, id , cuisines, costForTwo,city]=resInfo?.cards[2]?.card?.card?.info;
   
    return (resInfo=== null)?
       ( <shimmer/>):
    (
        <div className="menu">
             <h1>{name}</h1>
             <h2>{id}</h2>
             <h2>{city}</h2>
        </div>
       
    );
};
export default RestaurantMenu;