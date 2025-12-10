import { useEffect, useState } from "react"
import Card from "./Card"
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";

const Body  = ()=>{
    
    const url = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId="

    const [list,setList] = useState([]);
    const [filter,setFilter] = useState([]);

    const fetchData = async()=>{
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946#");
        const resData = await res.json();
        const cards = resData.data.cards;

        const resCard = cards.find((c)=>
            c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants = resCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setList(restaurants);
        setFilter(restaurants);
        
    }

    const topRes = ()=>{
        const filterList = list.filter((res)=>{
            return res.info.avgRating > 4.5;
        })
        setFilter(filterList);
    }

    const searchRes = ()=>{
        const filterList = list.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
        setFilter(filterList);
    }

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])
    
    return (list.length ===0) ?  <ShimmerUI/> :
    (
        <div className="body-container">
            <div className="search-container">
                <input placeholder="Search Restaurants" value = {searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={searchRes}> Search </button>
                <button onClick={()=>{
                    setFilter(list);
                }}> Clear </button>
            </div>
            <div className="top-rated">
                <button onClick={topRes} > Click to get Top rated restaruants </button>
            </div>
            
            <div className="res-container">
                <h2> Top restaruant chains in Bangalore </h2>
    
                <div className="res-card-container">
                    {filter.map((restaurant)=>{
                        const res = restaurant.info;
                        return (
                            <Link to = {`/restaurants/${res.id}`}  key = {res.id} > <Card res = {res}/> </Link>
                        )
                    })}
                
                    
                </div>
            </div>
        </div>
    )
}

export default Body