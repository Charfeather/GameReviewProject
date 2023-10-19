import React, { useEffect, useState } from "react"
import GameReviewRender from "./GameReviewRender"
import { NavLink } from "react-router-dom"

function ShooterComponent(){
    const [games,setgames]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('http://localhost:3001/shooter')
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
        <div className="shooter-page"><h1>Gamers World</h1><p>Shooters</p></div>  
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
export default ShooterComponent