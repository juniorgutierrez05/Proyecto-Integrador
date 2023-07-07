import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"
import axios from "axios";

function Deatil(){
const {id} = useParams();
const [character, setCharacter] = useState({})

useEffect(() => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      setCharacter(response.data);
    })
    .catch((error) => {
      
      alert("Error al obtener la información del personaje:");
    });
}, [id]);


    return (
        <div className={style.divDetail}>
          <div className={style.componet}>
            <h2>{character.name}</h2>
      <img className={style.image} src={character.image} alt={character.name} />
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Species: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
      </div>
        </div>
    )
}
export default Deatil;