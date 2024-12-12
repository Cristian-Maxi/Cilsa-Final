import React from 'react';
import './Nosotros.css';
import persona1 from '../../assets/persona1.jpeg'
import grupo1 from '../../assets/grupo1.jpeg'

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h1 className="nosotros-title">Nuestra Historia</h1>
      <div className="nosotros-content">
        <p>
          Bienvenidos a nuestro rincón de la música, un espacio que nació de la pasión compartida por cuatro amigos que, desde diferentes rincones del país, encontraron en los instrumentos musicales una forma de expresión única. Nuestra historia comenzó en 2021, durante largas charlas sobre nuestras bandas favoritas, conciertos memorables y el poder transformador de la música.
        </p>
        <p>
          Inspirados por nuestras experiencias y un profundo amor por los instrumentos, decidimos crear este blog como un homenaje a ese arte que nos ha acompañado en los momentos más importantes de nuestras vidas. Aquí compartimos historias, reseñas, consejos y anécdotas que esperamos sirvan de inspiración a músicos y amantes de la música de todas partes.
        </p>
        <p>
          Nuestro equipo está formado por cuatro apasionados de la música:
        </p>
        <ul>
          <li>
            <strong>Lucía Fernández</strong>: Lucía es la visionaria detrás del blog. Desde pequeña, su guitarra ha sido su compañera fiel, llevándola a componer canciones que cuentan historias profundas. Además de escribir, le encanta explorar nuevos géneros musicales y descubrir artistas emergentes.
          </li>
          <li>
            <strong>Carlos Méndez</strong>: Carlos, conocido entre amigos como "el hombre del ritmo", es nuestro baterista experto. Con un oído privilegiado para los detalles, aporta análisis técnicos y consejos para bateristas de todos los niveles. Su energía y creatividad son contagiosas.
          </li>
          <li>
            <strong>Sofía Morales</strong>: Pianista y amante de los sintetizadores, Sofía encuentra belleza en cada nota que toca. En el blog, se encarga de escribir sobre instrumentos clásicos y modernos, y de explorar la relación entre la tecnología y la música.
          </li>
          <li>
            <strong>Javier Ramírez</strong>: Javier es el alma melódica del equipo. Su bajo ha sido el puente entre distintos estilos musicales, desde jazz hasta rock progresivo. También se dedica a fotografiar instrumentos y conciertos, aportando una perspectiva visual única al blog.
          </li>
        </ul>
        <p>
          Este espacio no solo es un blog; es un lugar para conectar, aprender y compartir. Cada artículo que publicamos tiene el objetivo de acercarte un poco más a la magia de la música, ya sea ayudándote a elegir tu próximo instrumento, enseñándote técnicas nuevas o simplemente entreteniéndote con nuestras historias.
        </p>
        <p>
          Hemos trabajado arduamente para construir una comunidad donde la música sea el vínculo que nos une. Creemos que la música no tiene fronteras ni límites, y esperamos que encuentres en nuestro blog un espacio donde puedas explorar, aprender y soñar.
        </p>
        <p>
          Desde nuestros inicios, hemos recorrido un camino lleno de retos y satisfacciones. Hemos aprendido de nuestros errores, celebramos cada pequeño logro y, sobre todo, valoramos profundamente el apoyo de nuestros lectores. Sin ustedes, nada de esto sería posible.
        </p>
        <p>
          Si amas la música tanto como nosotros, te invitamos a explorar nuestro contenido y a formar parte de esta comunidad. Ya sea que estés empezando a tocar tu primer instrumento o que seas un músico experimentado, estamos seguros de que encontrarás algo aquí que te inspire.
        </p>
        <p>
          ¡Gracias por acompañarnos en este viaje musical! Te invitamos a seguir descubriendo el fascinante mundo de los instrumentos y la música junto a nosotros.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
