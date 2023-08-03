import React from "react";
const Card=(props)=>{
    const {reslistdata}=props;
     const {name,areaName,cloudinaryImageId, costForTwo, cuisines, avgRating, feeDetails}=reslistdata;
    return( <div className="res-card">
            <img  className="card-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h4>{name}</h4>
            <p>{areaName}</p>
            <p>{costForTwo}</p>
            <p>{cuisines?.join(",")}</p>
            <p>{avgRating}</p>
            
        </div>
    )
}
export default Card;