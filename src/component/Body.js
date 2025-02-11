import reslist from "../utils/constants.js";
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect}  from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";


const Body=()=>{
    //Local state variable- super powerful variable
        const [ ListOfRestaurant ,setListOfRestaurant]= useState([]);
        const [searchText,setSearchText]=useState("");
        const[filterRestaurant, setfilterRestaurant]=useState([])

// whenever state variable update , react trigger a reconsillation cycle(re-renders the component)
        console.log("Body rendered")
        useEffect(()=>{
            fetchData();

        },[]);
        const fetchData = async() => {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.545246&lng=77.2941132&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json= await  data.json();
                console.log(json);
                setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setfilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }; 
            
       //ternary operator           
    return ListOfRestaurant.length===0 ? (
         <Shimmer/> 
        ):(
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button 
                    onClick={()=>{
                        //filter the restraunt card and update the ui
                        //searchText
                        console.log(searchText);
                        const filterRestaurant=ListOfRestaurant.filter(
                            (res)=>res.info?.name?.toLowerCase().includes(searchText.toLowerCase()) 
                        );
                        setfilterRestaurant(filterRestaurant);
                    }}
                    >
                    Search
                    </button>
                    
                </div>
                <button className="filter-btn"
                onClick={
                    ()=>{
                    const Filteredlist =ListOfRestaurant.filter( (x)=> x.info.avgRatingString > "4");
                     setListOfRestaurant(Filteredlist);
                    }}
                 > 
               Top Rated restaurants
                </button>
            </div>
                <div className=" res-container">
                  {/* mapping of relist */}
                  { filterRestaurant.map((restaurant) => (
                
                 <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                
                 ))
                    
                  }

            </div>
        </div>
    )
}
export  default Body; 