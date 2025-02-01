import reslist from "../utils/constants.js";
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect}  from "react";

const Body=()=>{
        const [ ListOfRestaurant ,setListOfRestaurant]= useState(reslist);

        useEffect(()=>{
            fetchData();

        },[]);
        const fetchData = async() => {
            const data = await fetch(
                "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.545246&lng=77.2941132&carousel=true&third_party_vendor=1" 
                );
                const json= await  data.json();
                console.log(json);
                setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        };
            
                   
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={
                    ()=>{
                       
                    const Filteredlist =ListOfRestaurant.filter((x)=>{ return x.info.avgRating > 4.5})
                     setListOfRestaurant(Filteredlist);
                    }}
                 > 
               Top Rated restaurants
                </button>
            </div>
                <div className=" res-container">
                  {/* mapping of relist */}
                  { ListOfRestaurant.map((restaurant) =>
                   (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                     
                  }

               

            </div>
        </div>
    )
}
export  default Body; 