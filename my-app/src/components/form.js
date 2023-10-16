function Form(){
    return(
        <div className="placeHolder">
        <form  className="placeHolder ">
          <h3> Add Your favorite Game </h3>
          <input
            type="text"
            name=" game name"
            placeholder="Enter a game name..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a image URL..."
            className="placeHolder class"
          />
          <br />
          <input
            type="number out of 10"
            name="rating"
            placeholder= 'rating'
            className="placeHolder class "
          />
          <br />
          <input
            type="text"
            name="released"
            placeholder= 'released'
            className="placeHolder Class"
          />
        </form>
      </div>
    );
    
}
export default Form 