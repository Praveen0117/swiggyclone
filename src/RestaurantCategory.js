import React, { useState } from 'react'
import ItemsList from './ItemsList'

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    const handelClick = () => {
        setShowIndex()
    }

  return (
    <div>
        <div className=' mx-auto my-2 bg-gray-50 shadow-lg p-5 cursor-pointer'  >
            <div className='flex justify-between ' onClick={handelClick}>
                <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            
            {showItems && <ItemsList Items ={data.itemCards} />}
        </div>
        
    </div>
    
  )
}

export default RestaurantCategory
