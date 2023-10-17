import React, { useState } from "react";


const intialState = {
  rating:'0',
  image:'',
  game: '',
  released: ''
}



function Form(){

  const [formData, setFormData] = useState(intialState)
  const {rating, image, game, released} = formData
  const [gameType,setGameType] = useState([])

  function handleChange(event){
    setFormData((currentForm) =>{
      return{
        ...currentForm,
        [event.target.name]: event.target.value,
      }
    })
  }
  
  function handleSubmit(e){
    e.preventDefault()
  }
  function handleGameType(){
    setGameType()
  }
    return(
        <div className="placeHolder">
        <form onSubmit={handleSubmit} className="placeHolder ">
          <select onClick={handleGameType}>
            <option value='shooting' />
            <option value= 'mmorpg' />
            <option value= 'open-world'/>
          </select>
          <h3> Add Your favorite Game </h3>
          <input
            type="text"
            name="game"
            placeholder="Enter a game name..."
            className="input-text"
            value={game}
            onChange={handleChange}
            
            
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a image URL..."
            className="placeHolder class"
            value={image}
            onChange={handleChange}
          />
          <br />
          <input
            type="number out of 10"
            name="rating"
            placeholder= 'rating'
            className="placeHolder class "
            value={rating}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="released"
            placeholder= 'released'
            className="placeHolder Class"
            value={released}
            onChange={handleChange}
          />
        </form>
      </div>
    );
    
}
export default Form 