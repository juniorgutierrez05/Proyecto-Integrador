import React, { useState, useEffect } from "react";
import style from "./Form.module.css"
import Logo from "../../imagenes/Logo.jpeg"
import {validate} from "./validacion";

function Form({login}){
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(userData));
      }, [userData]);

    function handleChange(event){
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
          })
          
        } 
        function handleSubmit(event){
            event.preventDefault();
            login(userData);
          }
    return(
        <div className={style.divForm} onSubmit={handleSubmit}>
            <form className={style.form}>
                <img className={style.logo} src={Logo} alt="Logo" />
                <label className={style.label}>Email</label>
                <input 
                className={style.input}
                key="1"
                name="email"
                placeholder="Escribe tu Email..."
                type="text"
                value={userData.email}
                onChange={handleChange}></input>

                {errors.email ? (
                    <span style = {{color: "red"}}>{errors.email}</span>
                ):null}

                <label className={style.label}>Password</label>
                <input
                className={style.input}
                name="password"
                placeholder="Password..."
                type="password"
                value={userData.password}
                onChange={handleChange}></input>

                {errors.password ? (
                <span style={{ color: "red" }}>{errors.password}</span>
                ) : null}

                <button className={style.button} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Form;