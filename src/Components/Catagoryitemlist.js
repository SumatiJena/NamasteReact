import React from 'react'
import { Img_URL } from '../../utils/Constant'

const Catagoryitemlist = ({itemlist}) => {
  return (
    <div>{itemlist.map((item)=>{
        return(
            <div id={item.card.info.id} className="text-left">
                <div className="flex justify-between my-4">
                    <div className=''>
                        <h6 className='mx-4 font-bold'>{item.card.info.name}-₹ {item.card.info.price/100}</h6>
                        <p className='m-4'>{item.card.info.description}</p>
                       
                    </div>
                    
                    <div className="py-5">
                    <button className='button bg-white absolute rounded-md p-1 ml-15'>Add+</button>
                        <img className="w-30 h-20 " src={Img_URL+item.card.info.imageId}/>
                        
                    </div>
                </div>
                <hr/>
            </div>
        )
    })}</div>
  )
}

export default Catagoryitemlist