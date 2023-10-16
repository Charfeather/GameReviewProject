import {useEffect, useState} from 'react'
import Form from './components/Form'; 

function App() {
  const [gameData, setGameData] = useState([])
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <Form />
    </div>

  );
}

export default App;
