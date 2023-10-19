import React, { useEffect, useState } from "react";
function GameReviewRender({image,name,release,rating}){
    const[nameOrRating,setNameOrRating]=useState(true)
    const handleClick=()=>{
        console.log('I was clicked')
        setNameOrRating(!nameOrRating)
    }
    return(
        <li className="cards__item">
            <div className="card">
                <div className="release_date"><h1>{release}</h1></div>
                <img 
                  src={image}
                  alt={name}
                  className="card__image"
                  onClick={handleClick}
                  />
                <div className="game_content">
                    {
                        nameOrRating ? <div className="game_name">{name}</div> : <div className="rating"><h1>{rating}</h1></div>
                    }
                </div>
            </div>
        </li>
    )
}
export default GameReviewRender
