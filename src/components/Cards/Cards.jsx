import React from 'react';
import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css"


export default function Cards({ characters, onClose }) {
  if (!characters || !Array.isArray(characters)) {
    return null; // Otra opción es mostrar un mensaje de carga o un componente de carga en su lugar.
  }
   
   return <div className={styles.divCards}>
    
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={() => onClose(character.id)}
          character={character}
        />
      ))}
   </div>;
}
