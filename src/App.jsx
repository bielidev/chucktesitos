import { useEffect, useState } from 'react';
import axios from 'axios'; // Importa correctamente axios

import './App.css'

const baseURL = "https://api.chucknorris.io/jokes/random"

function App() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setJoke(response.data);
    }).catch((error) => {
      console.error("Error fetching joke:", error);
    });
  }, []); 

  
  function createJoke() {
    axios.get(baseURL).then((response) => {
      setJoke(response.data);
    }).catch((error) => {
      console.error("Error fetching joke:", error);
    });
  }

 
  return (
    <>
     <div id="main"> 
     {joke ? (
        <>
          <h1>{joke.title || "Chucktesitos"}</h1> {"Bienvenidos"}
          <p>{joke.value}</p>
        </>
      ) : (
        <p>Cargando chiste...</p>
      )}

      <button onClick={createJoke}>Otro chiste</button>

      <img src="https://elcomercio.pe/resizer/M_mNrwwYmqgaIWUC4Oc-JTnfgQ4=/640x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6GGAVWLXRBBUVOELPYKI2FHVSQ.jpg"  />
     </div>

    </>
  );
}

export default App;