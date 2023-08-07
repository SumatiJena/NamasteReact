import React, { useState } from 'react'
import Catagoryitemlist from './Catagoryitemlist';

const Restrocatogory = ({data}) => {
    const [showItem,setShowItemlist]=useState(false);
    const handleClick=()=>{
        setShowItemlist(!showItem);
    }
  return (
    <>
    <div className='category-tittle w-6/12 m-auto  shadow-lg my-6 p-2 bg-gray-50 ' >
        <div className='flex justify-between font-bold cursor-pointer' onClick={handleClick}>
        {data.title}
        ({data.itemCards.length})<span>🔽</span>
        </div>
        {showItem && <Catagoryitemlist itemlist={data.itemCards}/>}
     </div>
     
    </>
  )
}

export default Restrocatogory;