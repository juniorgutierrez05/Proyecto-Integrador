import React from "react";
import SearchBar from "./SearchBar/SearchBar"
import style from "./NavBar.module.css"
import { Link } from "react-router-dom"
import AudioPlayer from "react-audio-player";
import audioFile from "../../audios/get-schwifty-rick-and-morty.mp3"

export default function NavBar({onSearch} ){
   
    return (
        <div className={style.divNavBar}>
             <SearchBar onSearch={onSearch}  />
             <Link to="/about">
             <button className={style.about}>About</button>
             </Link>
             <Link to="/home">
             <button className={style.home}>Home</button>
             </Link>
             <Link to="/create">
             <button className={style.create}>Create</button>
             </Link>
             <AudioPlayer 
             src={audioFile}
              autoPlay 
              controls 
              className="custom-audio-player"
              />
        </div>
    )
}