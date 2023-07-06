import './App.css';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar.jsx"
import { useState, useEffect} from 'react';
import Image from "./imagenes/Title-rick.and.morty.jpg"
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./components/About/About"
import Deatil from './components/Deatil/Deatil';
import Create from './components/Create/Create';
import Form from './components/Form/Form';
import {Navigate, useLocation} from "react-router-dom"


function App() {
   
   const [access, setAccess] = useState(false);
   const EMAIL = 'junior.gutierrez@gmail.com';
   const PASSWORD = 'contraseña';

   function login(userData){
      if ( userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
        
      }
   }
   
const [characters, setCharacters] = useState([]);
function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
function onClose(id){
   const parsedId = parseInt(id);
   setCharacters((oldChars) => oldChars.filter((character) => character.id !== parsedId));
}
function handleCharacterCreate(character) {
   setCharacters((prevCharacters) => [...prevCharacters, character]);
 };
 function handleRandomCharacter() {
   axios.get('https://rickandmortyapi.com/api/character/')
     .then((response) => {
       const randomCharacter = response.data.results[Math.floor(Math.random() * response.data.results.length)];
       setCharacters((prevCharacters) => [...prevCharacters, randomCharacter]);
     })
     .catch((error) => {
       console.log(error);
     });
 };
  const location = useLocation();
  
  useEffect(() => {
   if (access && location.pathname === '/') {
      return <Navigate to="/home" />;
   }
}, [access, location]);
   return (
      <div className='App'>
      
       <Router>  
         {location.pathname !== '/' && <NavBar onSearch={onSearch} />}


         <Route exact path="/" render={() => <Form login={login}/>} />
         <Route path="/home" render={() => <Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" component={About} />
            <Route path="/detail/:id" component={Deatil} />
            <Route path="/create" render={() => <Create onCharacterCreate={handleRandomCharacter} />} />

      </Router>
      </div>
   );
}

export default App;
