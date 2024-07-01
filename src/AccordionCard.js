import React from 'react'

const AccordionCard = ({item}) => {
    
  return (

    <li className='flex flex-col'>
      <h1>{item.card.info.name}</h1>
    </li>
  )
}

export default AccordionCard
