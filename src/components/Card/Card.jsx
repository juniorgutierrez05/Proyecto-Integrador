import React from "react";
import style from "./Card.module.css"
import {Link} from "react-router-dom"
export default function Card(props) {
   const {id, name, status, species, gender, origin, image, onClose} = props;
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
         </div>
   );
}
