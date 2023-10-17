import Gamecard from "./Gamecard"
import { NavLink } from "react-router-dom"

function Homepage(){

    return(
        <div className="homepage-container">

            <h1 className="homepage-title"> title </h1>

            <button className="submit-route">
                < NavLink
                to="/Form" 
                > submit </NavLink>
             </button>

            <button  className="shooter-route">
                <NavLink 
                to='/shooter-reviews'>shooter
                </NavLink>
            </button>

            <button className="mmrpg-route">
                <NavLink 
                to="/mmo-reviews">MMORPG
                </NavLink>
            </button>
            <button className="openworld-route">
                <NavLink 
                to= "/open-world-reviews/">
                    Openworld
                </NavLink>
                
            </button>
        </div>
    )
}
export default Homepage