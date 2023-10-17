import React, { useEffect, useState } from "react";
function gameReviewRender({image,name,release,rating}){
    return(
        <li className="cards__item">
            <div className="card">
                <div className="release_date"><h1>{release}</h1></div>
                <img 
                  src={image}
                  alt={name}
                  className="card__image"
                  />
                <div className="game_content">
                    <div className="game_name">{name}</div>
                    <div className="rating"><h1>{rating}</h1></div>
                </div>
            </div>
        </li>
    )
}
export default gameReviewRender
