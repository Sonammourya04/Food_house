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
    return (resInfo=== null)?
       ( <shimmer/>):
    (
        <div className="menu">
             <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
             <h2>Menu</h2>
             <ul>
                <li>Biryani</li>
                <li></li>
                <li></li>
             </ul>
        </div>
       
    );
};
export default RestaurantMenu;