import React from 'react';
import './Generos.css';
import rock from '../../assets/rockandroll.jpeg'
import blues from '../../assets/blues.jpeg'
import jazz from '../../assets/jazz.jpeg'
import pop from '../../assets/pop.jpeg'
import reggaeton from '../../assets/reggaeton.jpeg'
import hip from '../../assets/hiphop.jpeg'
import electronica from '../../assets/electronica.jpeg'
import clasica from '../../assets/clasica.jpeg'

const Generos = () => {
  return (
    <div className="generos-container">
      <header>
        <h1 className="title">Géneros Musicales</h1>
      </header>

      <section className="genre-section">
        <div className="genre-item">
          <h2>Rock</h2>
          <p>
            El rock es un género musical que comenzó en la década de 1950 en los Estados Unidos. Se caracteriza por el uso de guitarras eléctricas, batería fuerte y letras que a menudo abordan temas sociales y emocionales. Subgéneros incluyen el rock clásico, el punk y el grunge.
          </p>
          <img 
            src={rock} 
            alt="Rock"
            className="genre-image rock-image"
          />
        </div>

        <div className="genre-item">
          <h2>Jazz</h2>
          <p>
            El jazz es un género musical originado en Nueva Orleans a principios del siglo XX. Se caracteriza por la improvisación, el uso de acordes complejos y el ritmo sincopado. Los músicos de jazz a menudo improvisan sobre las progresiones armónicas, lo que da lugar a performances únicas.
          </p>
          <img 
            src={jazz}
            alt="Jazz"
            className="genre-image jazz-image"
          />
        </div>

        <div className="genre-item">
          <h2>Hip-Hop</h2>
          <p>
            El hip-hop nació en los barrios de Nueva York en la década de 1970. Es un género que se caracteriza por el uso de rimas, ritmos de percusión y bases electrónicas. El rap, uno de los componentes principales del hip-hop, es utilizado para contar historias, reflexionar sobre temas sociales o expresar emociones.
          </p>
          <img 
            src={hip}
            alt="Hip-Hop"
            className="genre-image hiphop-image"
          />
        </div>

        <div className="genre-item">
          <h2>Electrónica</h2>
          <p>
            La música electrónica abarca una amplia gama de estilos que emplean sonidos sintetizados, producidos por instrumentos electrónicos. Popular en discotecas y festivales, sus subgéneros incluyen house, techno, trance y dubstep, y se caracteriza por beats repetitivos y efectos sonoros.
          </p>
          <img 
            src={electronica}
            alt="Electrónica"
            className="genre-image electronic-image"
          />
        </div>

        <div className="genre-item">
          <h2>Pop</h2>
          <p>
            La música pop es un género de música popular que abarca una variedad de estilos musicales. Se caracteriza por su accesibilidad, estructuras simples y estribillos pegajosos. Artistas como Michael Jackson y Madonna han sido exponentes del pop mundialmente conocidos.
          </p>
          <img 
            src={pop}
            alt="Pop"
            className="genre-image pop-image"
          />
        </div>

        <div className="genre-item">
          <h2>Reggaeton</h2>
          <p>
            El reggaeton es un género que se originó en Puerto Rico en los años 90, fusionando elementos de hip-hop, dancehall y música latina. Se caracteriza por su ritmo pegajoso y letras sobre la fiesta, el amor y la vida urbana. Artistas como Daddy Yankee y J Balvin han popularizado este género a nivel mundial.
          </p>
          <img 
            src={reggaeton}
            alt="Reggaeton"
            className="genre-image reggaeton-image"
          />
        </div>

        <div className="genre-item">
          <h2>Blues</h2>
          <p>
            El blues es un género musical originado en el sur de los Estados Unidos. Su estructura armónica básica, que utiliza la "blues scale", se caracteriza por la repetición y la expresión emocional a través de la voz y la guitarra. Artistas como B.B. King y Muddy Waters son considerados pioneros de este estilo.
          </p>
          <img 
            src={blues}
            alt="Blues"
            className="genre-image blues-image"
          />
        </div>

        <div className="genre-item">
          <h2>Clásica</h2>
          <p>
            La música clásica es un género que se desarrolló principalmente en Europa desde el siglo XVII. Compositores como Beethoven, Mozart y Bach crearon obras que siguen siendo interpretadas hoy en día. El género abarca sinfonías, conciertos y música de cámara con una amplia orquestación.
          </p>
          <img 
            src={clasica}
            alt="Clásica"
            className="genre-image classical-image"
          />
        </div>

      </section>

      <footer>
        <p>Explora más sobre la música y sus géneros. ¡La música es una forma de expresión sin límites!</p>
      </footer>
    </div>
  );
};

export default Generos;
