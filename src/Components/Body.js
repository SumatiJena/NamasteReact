import { useParams } from "react-router-dom";
import React, { useState,useEffect } from "react";
import Card from "./Card";
import { Link, useParams } from 'react-router-dom';
import useOnlinestatus from "../../utils/useOnlinestatus";
import Simmer from "./Simmer";
const Body=()=>{
    const [reslist, setReslist]=useState([]);
    const [searchData, setsearchData]=useState([]);
    const [filterresdata, setFilterresdata]=useState([]);
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
    console.log(online)
   if(online==false){
    return<h1>Please check your internet connection</h1>
   }
    if(reslist?.length==0){
        return <Simmer/>
    }
   return reslist?.length==0?<Simmer/>:(
        <div className="body">
        <div className="search">
            <input type="text" value={searchData} onChange={(e)=>setsearchData(e.target.value)}/>
           <button onClick={filterData}>Search</button>
        </div>
        <div className="res-container">
          {filterresdata?.map((item,ind)=>{
            // console.log(item.info)
            return <Link to={"/restaurant/"+item.info.id}><Card reslistdata={item.info} key={item.info.id}/></Link>
          })}
           
           
        </div>
    </div>
)
}
export default Body;