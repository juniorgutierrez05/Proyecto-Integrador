import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Deatil.module.css"
import axios from "axios";

function Deatil(){
const {id} = useParams();
const [character, setCharacter] = useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
    return (
        <div>
            <h2>{character.name}</h2>
      <img className={style.image} src={character.image} alt={character.name} />
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Species: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
        </div>
    )
}
export default Deatil