import React, {useEffect, useState} from 'react'
import Form from './components/Form'; 
import Homepage from './components/Homepage';

function App() {
  const [gameData, setGameData] = useState([])
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <Form />
      <Homepage/>
    </div>

  );
}

export default App;
