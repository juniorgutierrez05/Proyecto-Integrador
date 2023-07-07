import React from "react";
import style from "./About.module.css"

export default function About(){
    return(
        <div className={style.divAbout}>
         <div className={style.contenido}> 
            <h2 className={style.titleAPI}>Acerca de la API de Rick and Morty</h2>
         <p className={style.parr}>
         ¡Bienvenido a la API de Rick and Morty! Esta API fue creada con el propósito de proporcionar información detallada sobre los personajes,
          episodios y ubicaciones de la popular serie de televisión "Rick and Morty".
         </p>
         <p className={style.parr}>
            Nuestra API está diseñada para inspirar y desafiar a los apasionados fans de Rick and Morty
             y a los ambiciosos desarrolladores en su camino hacia la excelencia como Full Stack Developers.
         </p>
         <h2 className={style.titleAPI}>Acerca del creador</h2>
         <p className={style.parr}>
            ¡Hola, aventureros del desarrollo! Soy Junior Andreis Gutierrez Morales,
             y me enorgullece presentarles esta obra de amor llamada API de Rick and Morty.
              Como estudiante de la prestigiosa academia de Henry, he invertido mi tiempo, 
              esfuerzo y pasión en cada línea de código para brindarte una experiencia excepcional.
         </p>
         <p className={style.parr}>
            Mi visión es empoderar a todos los entusiastas de Rick and Morty 
            y desarrolladores en formación para que exploren, experimenten y se inspiren.
             Esta API es solo el comienzo de un viaje épico en el que la creatividad
              y la tecnología se unen para crear soluciones innovadoras.
         </p>
         <p className={style.parr}>
            Únete a nosotros en esta emocionante travesía mientras expandimos los límites de la programación,
             aprendemos de nuestros errores y creamos proyectos impresionantes. Estoy aquí para apoyarte en cada paso 
             del camino y asegurarme de que alcances todo tu potencial como Full Stack Developer.
         </p>
         <p className={style.parr}>
            ¡Prepárate para desafiar tus habilidades, explorar nuevas ideas y ser parte de la próxima generación
             de innovadores! Juntos, construiremos un futuro brillante y lleno de oportunidades.
         </p>
         <p className={style.parr}>
            ¡Que comience la aventura!
         </p>
         </div>
        </div>
    )
}
