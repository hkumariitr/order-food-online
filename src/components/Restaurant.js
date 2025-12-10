import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ResCard from './ResCard';

const Restaurant = () => {
    
    const {id}  = useParams();
    const url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${id}`;

    const[restaruant, setRestaurant] = useState({});
    const [menu,setMenu] = useState([]);

    const fetchRes = async ()=>{
        const data = await fetch(url);
        const json = await data.json();
        const resList = json.data.cards;
        const mainCard = resList.find((c)=> c?.card?.card?.info);
        const resCard = mainCard.card.card.info;
        const menuCard = resList.find((c)=> c?.groupedCard?.cardGroupMap?.REGULAR);
        const menuListCard = menuCard.groupedCard.cardGroupMap.REGULAR.cards;
        const itemCard = menuListCard.find((c)=>c?.card?.card?.itemCards );

        const itemList = itemCard.card.card.itemCards;
        // data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[10].card.card.itemCards[0]
        setRestaurant(resCard);
        setMenu(itemList);
        
    }

    useEffect(()=>{
        fetchRes();
    },[])

    console.log(menu);

  return (
    <div className='restaurant-container'>
        <ResCard restaurant = {restaruant} menuList = {menu}/>
    </div>
  )
}

export default Restaurant
