import React from 'react'

const ResCard = ({restaurant}) => {
    const {name,
        city,
        avgRating,
        cloudinaryImageId,
        costForTwoMessage,
        cuisines,
        isOpen,
        totalRatings,
        sla
    } = restaurant
 
  return (
    <div className='restaurant-card'>
     Card for restaruant {name};
      
    </div>
  )
}

export default ResCard
