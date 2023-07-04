import React from "react";
import Image from "../../imagenes/Title-rick.and.morty.jpg"
import style from "./Home.module.css"
function Home(){
    
    return(
        <div>
            <img className= {style.imageTitulo} src= {Image} alt='Title Rick and morty'/>
        </div>
    )
}
export default Home