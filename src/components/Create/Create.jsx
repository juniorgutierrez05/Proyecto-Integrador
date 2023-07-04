import React, { useState } from 'react';
import style from "./Create.module.css"
function Create({ onCharacterCreate }) {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea el objeto del personaje
    const character = {
      name,
      species,
      status,
    };
    // Llama a la función de creación de personaje del padre
    onCharacterCreate(character);
    // Reinicia los campos del formulario
    setName('');
    setSpecies('');
    setStatus('');
  };

  return (
    <div className={style.divCreate}> 
    <div className={style.divContenido}>
      <h2 className={style.title}>Personaje Random</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.divName}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Name" />
        </div>
        <div className={style.divSpecie}>
          <label htmlFor="species">Especie:</label>
          <input type="text" id="species" value={species} onChange={handleSpeciesChange} placeholder="Especie" />
        </div>
        <div className={style.divStatus}>
          <label htmlFor="status">Estatus:</label>
          <input type="text" id="status" value={status} onChange={handleStatusChange} placeholder="Status"/>
        </div>
        <button className={style.button} type="submit">Crear</button>
      </form>
    </div>
    </div>
  );
}

export default Create;
