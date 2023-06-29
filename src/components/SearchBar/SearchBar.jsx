import React, { useState } from "react";
import styled from "./SearchBar.module.css"

export default function SearchBar(props) {
 

  return (
    <div className= {styled.divSearchBar}>
      <input className={styled.input}
        type="search"
      />
      <button className={styled.Button} onClick={props.onSearch}>Agregar</button>
    </div>
  );
}

