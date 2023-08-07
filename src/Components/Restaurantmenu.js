import React, { useEffect, useState } from 'react';
import useRestoMenu from "../../utils/useRestoMenu";
import { useParams } from 'react-router-dom';
import Simmer from './Simmer';
import Restrocatogory from './Restrocatogory';


const Restaurantmenu = () => {
  
    const {resid}=useParams();
    const restMenu= useRestoMenu(resid);
    if(restMenu==null){
        return <Simmer/>;
    }
   const {name,avgRating,cuisines,costForTwoMessage}=restMenu?.cards[0]?.card?.card?.info;
   const itemCards = restMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
   const catagory=restMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;
 
   const catagoryType=catagory.filter((ac)=>{
      return ac.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
   })
   console.log(catagoryType)
    //console.log(restMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards)
    //?.data?.cards?.card?.card
    //const [costForTwoMessage,cuisines,avgRating]=restMenu?.data?.cards?.card?.card;
  return (
    <div className='restroMenu text-center'>
        <h4 className='font-bold text-xl my-5'>{name}</h4>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwoMessage}</h4>

       {catagoryType.map((item)=>{
        return(<><Restrocatogory data={item.card.card}/></>)
       })}
    </div>
  )
}

export default Restaurantmenu