import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemsList = ({Items}) => {

  const dispatch = useDispatch()
  
  const handelAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className=''>
      {Items.map(item => <div key={item.card.info.id} className='p-2 m-2 border-b-2 h-auto border-black text-left flex justify-between'>
        <div  className=' mr-10 w-9/12'>
            <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price/100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
            
        </div>
        <div className='w-3/12'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item.card.info.imageId} className='rounded-r-lg w-28 h-28 mx-24 my-4' />
            <button className='p-2 font-bold w-28 mx-24 bg-black text-white shadow-lg rounded-lg' onClick={() => handelAddItem(item)}>Add ➕</button>
        </div>


      </div> )}
    </div>
  )
}

export default ItemsList