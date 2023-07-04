import React, { useState } from "react";
import styled from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
 const [id, setId] = useState("");
 function handleChange(event){
  setId(event.target.value)
 }

  return (
    <div className= {styled.divSearchBar}>
      <input className={styled.input}
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Busca un personaje..."
      />
      <button className={styled.Button} onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}

