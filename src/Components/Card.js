import React from "react";
import { Img_URL } from "../../utils/Constant";
const Card=(props)=>{
    const {reslistdata}=props;
     const {name,areaName,cloudinaryImageId, costForTwo, cuisines, avgRating, feeDetails}=reslistdata;
    return( <div className="res-card w-[200px] m-2 p-2 bg-gray-100 break-words h-[400px] hover:bg-gray-300">
            <img  className="card-img" src={Img_URL+cloudinaryImageId} />
            <h4 className="font-bold">{name}</h4>
            <h2>{props.promoted}</h2>
            <p>{areaName}</p>
            <p>{costForTwo}</p>
            <p>{cuisines?.join(",")}</p>
            <p>{avgRating}</p>
            
        </div>
    )
}
export const RestrocaedWithpromoted=(Card)=>{
    return (props)=>{
        return(
            <>
                <h3>promoted</h3>
                <Card {...props}/>
            </>
        )
    }
}
export default Card;