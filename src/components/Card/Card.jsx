import React, { useState, useEffect } from "react";
import style from "./Card.module.css"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import  {addFav, removeFav} from "../../redux/actions"

function Card(props) {
   const {id, name, status, species, gender, origin, image,character, onClose} = props;
   const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   function handleFavorite() {
      setIsFav((prevIsFav) => {
        if (prevIsFav) {
          dispatch(removeFav(character.id.toString())); // Verifica que character no sea undefined antes de utilizar toString()
          return false;
        } else {
          dispatch(addFav(character)); // Verifica que character no sea undefined
          return true;
        }
      });
    }
   return (
      <div className={style.divCard}>
         <button className={style.button} onClick={onClose}>x</button>
         
         <img className={style.img} src={image} alt={name} /> 
         <Link to={`/detail/${id}`}> <h4 className={style.Name}>{name}</h4></Link>
         
         <div className={style.data}>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         {/*<h4 className={style.text}>{origin}</h4>*/}
         {/*<h4 className={style.text}>{status}</h4>*/}
         </div>
         {isFav ? (
        <button onClick={handleFavorite} className={style.favoriteButton}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={style.favoriteButton}>
          🤍
        </button>
      )}
         </div>
   );
}

 
 export default Card;
