import React from "react";
import style from "./Card.module.css"
export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose} = props;
   return (
      <div className={style.divCard}>
         <button className={style.button} onClick={onClose}>x</button>
         
         <img className={style.img} src={image} alt={name} /> 
         <h4 className={style.Name}>{name}</h4>
         
         <div className={style.data}>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         {/*<h4 className={style.text}>{origin}</h4>*/}
         {/*<h4 className={style.text}>{status}</h4>*/}

         </div>
         </div>
   );
}
