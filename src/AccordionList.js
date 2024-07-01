import React, { useState } from 'react'
import AccordionCard from './AccordionCard'

const AccordionList = ({accordionList}) => {
    
  return (
    <ul className=''>
      
      {
        accordionList.map((item, index )=> <AccordionCard item={item} />)
      }
    </ul>
  )
}

export default AccordionList
