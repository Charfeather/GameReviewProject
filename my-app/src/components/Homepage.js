import Gamecard from "./Gamecard"

function Homepage(){

function handleSubmitRoute(){
    console.log('clicked')
}

function handleShooter(){
    console.log('clicked')
}

function handleMmrpg(){
    console.log('clicked')
}

function handleOpenWorld(){
    console.log('clicked')
}

    return(
        <div className="homepage-container">

            <h1 className="homepage-title"> title </h1>

            <button onClick={handleSubmitRoute} className="submit-route">submit</button>

            <button onClick={handleShooter} className="shooter-route">shooter</button>

            <button onClick={handleMmrpg} className="mmrpg-route">MMORPG</button>

            <button onClick={handleOpenWorld} className="openworld-route">open-world</button>
        </div>
    )
}
export default Homepage