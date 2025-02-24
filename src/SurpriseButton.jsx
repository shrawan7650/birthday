import React from 'react'
import "./surpaaise.css"
const SurpriseButoon = ({handleSurpriseClick}) => {
  return (
    <div>
       <button className="surprise-button" onClick={handleSurpriseClick}>
          🎁 Click for a Surprise! 🎁
        </button>
    </div>
  )
}

export default SurpriseButoon
