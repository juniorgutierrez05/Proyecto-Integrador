import './App.css';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar.jsx"
import { useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx"
import Create from "./components/Create/Create.jsx";
import Home from './components/Home/Home.jsx';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites.jsx"
import {useNavigate, useLocation} from "react-router-dom";


function App() {
   const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'password1';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
const [characters, setCharacters] = useState([]);


function onSearch(id) {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
   return (
      <div className='App'>
       {location.pathname !== '/' && <NavBar onSearch={onSearch} />}
       
       <Routes>  
         <Route path='/' element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/create" element={<Create onCharacterCreate={handleRandomCharacter} />}/>
            <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      </div>
   );
}

export default App;
