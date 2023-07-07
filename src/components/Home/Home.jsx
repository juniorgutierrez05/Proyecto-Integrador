import React from "react";
import Image from "../../imagenes/Title-rick.and.morty.jpg"
import style from "./Home.module.css"
import Cards from "../Cards/Cards";
import App from "../../App";


export default function Home({ characters, onClose }){
    
    return(
        <div>
            <img className= {style.imageTitulo} src= {Image} alt='Title Rick and morty'/>
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}
