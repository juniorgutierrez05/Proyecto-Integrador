// reducer.js

// Estado inicial
const initialState = {
    myFavorites: [],
    isFav: false,
  };
  
  // Reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAV':
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload]
        };
      case 'REMOVE_FAV':
        const idToRemove = parseInt(action.payload);
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            character => character.id !== idToRemove
          )
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  