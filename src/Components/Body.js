import { useParams } from "react-router-dom";
import React, { useState,useEffect, useContext } from "react";
import Card from "./Card";
import { Link, useParams } from 'react-router-dom';
import useOnlinestatus from "../../utils/useOnlinestatus";
import Simmer from "./Simmer";
import usercontext from "../../utils/usercontext";
import { RestrocaedWithpromoted } from "./Card";
//import Usercontext from "../../utils/Usercontext";
const Body=()=>{
    const [reslist, setReslist]=useState([]);
    const [searchData, setsearchData]=useState([]);
    const [filterresdata, setFilterresdata]=useState([]);
    const {loggedinuser, setUserName} = useContext(usercontext);
    // console.log(reslist[0].info.id)
    const { resid } = useParams();
    useEffect(() => {
        fetchData();
        
     }, [])
   
    const fetchData=async()=>{
        const Data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9774747&lng=77.732276&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData= await Data.json();
        setReslist(jsonData.data.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterresdata(jsonData.data.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const filterData=()=>{
        const fdata= reslist?.filter((data)=>{
           return data.info.name.toLowerCase().includes(searchData.toLowerCase())
        })
        setFilterresdata(fdata)
    }
    const online=useOnlinestatus();
   if(online==false){
    return<h1>Please check your internet connection</h1>
   }
    if(reslist?.length==0){
        return <Simmer/>
    }
    const RestaurantCardPromoted=RestrocaedWithpromoted(Card);
   return reslist?.length==0?<Simmer/>:(
        <div className="body">
        <div className="search m-4 p-4">
            <input type="text" value={searchData} onChange={(e)=>setsearchData(e.target.value)} className="border border-gray rounded-md" />
           <button className="m-4 px-4 py-1 rounded-md bg-green-200" onClick={filterData}>Search</button>
        </div>
        <input type="text" value={loggedinuser} onChange={(e)=>setUserName(e.target.value)}/>
      
        <div className="res-container flex flex-wrap">
          {filterresdata?.map((item,ind)=>{
            // console.log(item.info)
            return( 
            <>
            <Link to={"/restaurant/"+item.info.id}>{item.info.isOpen?<RestaurantCardPromoted reslistdata={item.info} promoted={item.info.promoted} key={item.info.id}/>:<Card reslistdata={item.info} promoted={item.info.promoted} key={item.info.id}/>}</Link>
            <h2>{item.info.isOpen?"huuu":"hello"}</h2>
            </>  
            )
          })}
           
           
        </div>
    </div>
)
}
export default Body;