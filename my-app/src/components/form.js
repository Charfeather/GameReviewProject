import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const intialState = {
  rating: 0,
  image:'',
  game: '',
  released: ''
}



function Form(){

  const [formData, setFormData] = useState(intialState)
  const {rating, image, game, released} = formData
  const [gameType,setGameType] = useState('')

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
    
    fetch(`http://localhost:3001/${gameType}`,{
      method: 'POST',
      headers:{ "Content-Type": "application/json",},
      body:JSON.stringify(formData),
    })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw Error("didn't work");
      }
    })
    .then((game) =>  {
      console.log(game)
      
    })
    .catch(console.log);
  }
  function handleGameType(e){
    console.log(e.target.value)

    setGameType(e.target.value)
  }
    return(
        <div className="container">
        <form  onSubmit={handleSubmit}>
         
          <h3 className="form-title"> Add Your favorite Game </h3>
          <select onChange={handleGameType} className="select-text">
            <option value="" disabled selected hidden>Pick A Category</option>
            <option value= 'shooter'> shooter</option>
            <option value= 'MMORPG'> mmorpg</option>
            <option value= 'openWorld'>open-world</option>
          </select>
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
            className="input-text"
            value={image}
            onChange={handleChange}
          />
          <br />
          <input
            type='number'
            max='10'
            min='0'
            name="rating"
            placeholder= 'rating'
            className="input-text "
            value={rating}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="released"
            placeholder= 'released'
            className="input-text"
            value={released}
            onChange={handleChange}
          />
           <button type="submit" className="submit"> Add Game </button>
        </form>
        <button className="button">
            <NavLink
            to='/'>HOME</NavLink>
        </button>
        <button className="button">
            <NavLink
            to="/open-world-reviews/">Open-World Games</NavLink>
        </button>
        <button className="button">
            <NavLink
            to='/mmo-reviews'>MMO Games</NavLink>
        </button>
        <button className="button">
            <NavLink
            to='/shooter-reviews'>Shooting Games</NavLink>
        </button>
      </div>
    );
    
}
export default Form 