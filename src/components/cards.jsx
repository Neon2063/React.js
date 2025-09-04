import cards from "../assets/cards/Cards_data"

import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="heading text-white text-2xl font-bold m-5">
            Popular shows
        </div>

        <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
                <img src={card.image} alt={card.title} key={index} />
            ))}
        </div>
    </div>
  )
}


    
export default Cards