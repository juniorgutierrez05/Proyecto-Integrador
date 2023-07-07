// actions.js

// Action creator para agregar un favorito
export const addFav = (character) => {
    return {
      type: 'ADD_FAV',
      payload: character
    };
  };
  
  // Action creator para remover un favorito por ID
  export const removeFav = (id) => {
    return {
      type: 'REMOVE_FAV',
      payload: id
    };
  };
