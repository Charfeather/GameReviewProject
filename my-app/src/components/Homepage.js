import Gamecard from "./Gamecard"
import { NavLink } from "react-router-dom"

function Homepage(){

    return(
        <div className="homepage-container">

            <div className="title-div">
                <h1 className="homepage-title"> GAMER'S  WORLD </h1>
            </div>
            

            <button className="submit-route">
                < NavLink
                className="inner-text"
                to="/Form"> New Game
                </NavLink>
             </button>

            <button  className="shooter-route">
                <NavLink 
                className="inner-text"
                to='/shooter-reviews'>Shooting
                </NavLink>
            </button>

            <button className="mmrpg-route">
                <NavLink 
                className="inner-text"
                to="/mmo-reviews">MMORPG
                </NavLink>
            </button>
            <button className="openworld-route">
                <NavLink 
                className="inner-text"
                to= "/open-world-reviews/"> Openworld
                </NavLink>
                
            </button>
        </div>
    )
}
export default Homepage