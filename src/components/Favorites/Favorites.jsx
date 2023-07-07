import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import style from "./Favorites.module.css"

function Favorites({ myFavorites }) {
  return (
    <div className={style.divFav}>
      {myFavorites.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
