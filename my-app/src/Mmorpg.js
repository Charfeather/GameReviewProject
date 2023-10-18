import React, { useEffect, useState } from "react"
import GameReviewRender from "./GameReviewRender"

function MmoComponent(){
    const [games,setgames]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('http://localhost:3001/MMORPG')
                const data= await response.json()
                setgames(data)
            }catch(error){console.error("error",error)}
        }
        fetchData()
    },[])
    const gameRender=games.map((game)=>{
        return(<GameReviewRender key={game.game} image={game.image} name={game.game} release={game.released} rating={game.rating} />)
    })
    return(
    <div className="centerer">    
     <ul className="cards">
        {gameRender}
     </ul>
     <div className="button_div">
         <button className="button">ADD A NEW GAME</button>
     </div>
    </div>
    )
}
export default MmoComponent