import React, { useEffect, useState } from 'react';
import useRestoMenu from "../../utils/useRestoMenu";
import { useParams } from 'react-router-dom';
import Simmer from './Simmer';


const Restaurantmenu = () => {
  
    const {resid}=useParams();
    const restMenu= useRestoMenu(resid);
    if(restMenu==null){
        return <Simmer/>;
    }
   const {name,avgRating,cuisines,costForTwoMessage}=restMenu?.cards[0]?.card?.card?.info;
   const itemCards = restMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
    //console.log(restMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards)
    //?.data?.cards?.card?.card
    //const [costForTwoMessage,cuisines,avgRating]=restMenu?.data?.cards?.card?.card;
  return (
    <div>
        <h4>{name}</h4>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwoMessage}</h4>
        {itemCards.map((item)=>
            <li>{item.card.info.name}</li>
        )}
        <ul>
           {itemCards[0].card.info.name}
        </ul>
    </div>
  )
}

export default Restaurantmenu