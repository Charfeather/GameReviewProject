import React, { useEffect, useState } from "react"
import GameReviewRender from "./GameReviewRender"
import { NavLink } from "react-router-dom"

function OpenWorldComponent(){
    const [games,setgames]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('http://localhost:3001/openWorld')
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
    <div className='centerer'>
        <div className="openworld-page"><h1>Gamers World's</h1><p>OpenWorld Games</p></div>  
        <div className="cards">
           {gameRender}
        </div>
        <div className="button_div">
           <button className="button">
               <NavLink 
               to='/Form'>ADD A NEW GAME</NavLink>
           </button>
           <button className="button">
               <NavLink
               to='/'>HOME</NavLink>
           </button>
        </div>
    </div>
    )
}
export default OpenWorldComponent