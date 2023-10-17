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
        <div>
            <h1> title </h1>
            <button onClick={handleSubmitRoute}>submit</button>
            <button onClick={handleShooter}>shooter</button>
            <button onClick={handleMmrpg}>MMORPG</button>
            <button onClick={handleOpenWorld}>openWorld</button>
        </div>
    )
}
export default Homepage