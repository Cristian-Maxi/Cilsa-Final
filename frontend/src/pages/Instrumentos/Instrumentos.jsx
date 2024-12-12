import React, { useState, useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import guitarra1 from '../../assets/guitarra1.png';
import guitarra2 from '../../assets/guitarra2.png';
import guitarra3 from '../../assets/guitarra3.png';
import guitarra4 from '../../assets/guitarra4.png';
import guitarra5 from '../../assets/guitarra5.png';
import guitarra6 from '../../assets/guitarra6.png';
import guitarra7 from '../../assets/guitarra7.png';
import guitarra8 from '../../assets/guitarra8.png';
import guitarra9 from '../../assets/guitarra9.png';
import guitarra10 from '../../assets/guitarra10.png';
import guitarra11 from '../../assets/guitarra11.png';
import guitarra12 from '../../assets/guitarra12.png';
import guitarra13 from '../../assets/guitarra13.png';
import bateria1 from '../../assets/bateria1.png';
import bateria2 from '../../assets/bateria2.png';
import bateria3 from '../../assets/bateria3.png';
import bateria4 from '../../assets/bateria4.png';
import bateria5 from '../../assets/bateria5.png';
import bateria6 from '../../assets/bateria6.png';
import bateria7 from '../../assets/bateria7.png';
import bateria8 from '../../assets/bateria8.png';
import bateria9 from '../../assets/bateria9.png';
import bateria10 from '../../assets/bateria10.png';
import bajo1 from '../../assets/bajo1.png';
import bajo2 from '../../assets/bajo2.png';
import bajo3 from '../../assets/bajo3.png';
import bajo4 from '../../assets/bajo4.png';
import bajo5 from '../../assets/bajo5.png';
import bajo6 from '../../assets/bajo6.png';
import bajo7 from '../../assets/bajo7.png';
import bajo8 from '../../assets/bajo8.png';
import piano1 from '../../assets/piano1.png';
import piano2 from '../../assets/piano2.png';
import piano3 from '../../assets/piano3.png';
import piano4 from '../../assets/piano4.png';
import piano5 from '../../assets/piano5.png';
import piano6 from '../../assets/piano6.png';
import piano7 from '../../assets/piano7.png';
import piano8 from '../../assets/piano8.png';
import piano9 from '../../assets/piano9.png';
import violin1 from '../../assets/violin1.png';
import violin2 from '../../assets/violin2.png';
import violin3 from '../../assets/violin3.png';
import violin4 from '../../assets/violin4.png';
import violin5 from '../../assets/violin5.png';
import violin6 from '../../assets/violin6.png';
import violin7 from '../../assets/violin7.png';
import saxo1 from '../../assets/saxo1.png';
import saxo2 from '../../assets/saxo2.png';
import saxo3 from '../../assets/saxo3.png';
import saxo4 from '../../assets/saxo4.png';
import saxo5 from '../../assets/saxo5.png';
import saxo6 from '../../assets/saxo6.png';
import saxo7 from '../../assets/saxo7.png';
import clarinete1 from '../../assets/clarinete1.png';
import clarinete2 from '../../assets/clarinete2.png';
import clarinete3 from '../../assets/clarinete3.png';
import clarinete4 from '../../assets/clarinete4.png';
import clarinete5 from '../../assets/clarinete5.png';
import clarinete6 from '../../assets/clarinete6.png';
import clarinete7 from '../../assets/clarinete7.png';
import trompeta1 from '../../assets/trompeta1.png';
import trompeta2 from '../../assets/trompeta2.png';
import trompeta3 from '../../assets/trompeta3.png';
import trompeta4 from '../../assets/trompeta4.png';
import trompeta5 from '../../assets/trompeta5.png';
import trompeta6 from '../../assets/trompeta6.png';

const Instrumentos = () => {
  const [data, setData] = useState([]);


  const instrumentosData = [
    {
      id: 1,
      nombre: 'Guitarra',
      imagenes: [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8, guitarra9, guitarra10, guitarra11, guitarra12, guitarra13],
    },
    {
      id: 2,
      nombre: 'Batería',
      imagenes: [bateria1, bateria2, bateria3, bateria4, bateria5, bateria6, bateria7, bateria8, bateria9, bateria10],
    },
    {
      id: 3,
      nombre: 'Bajo',
      imagenes: [bajo1, bajo2, bajo3, bajo4, bajo5, bajo6, bajo7, bajo8],
    },
    {
      id: 4,
      nombre: 'Piano',
      imagenes: [piano1, piano2, piano3, piano4, piano5, piano6, piano7, piano8, piano9],
    },
    {
      id: 5,
      nombre: 'Violin',
      imagenes: [violin1, violin2, violin3, violin4, violin5, violin6, violin7],
    },
    {
      id: 6,
      nombre: 'Saxo',
      imagenes: [saxo1, saxo2, saxo3, saxo4, saxo5, saxo6, saxo7],
    },
    {
      id: 7,
      nombre: 'Trompeta',
      imagenes: [trompeta1, trompeta2, trompeta3, trompeta4, trompeta5, trompeta6],
    },
    {
      id: 8,
      nombre: 'Clarinete',
      imagenes: [clarinete1, clarinete2, clarinete3, clarinete4, clarinete5, clarinete6, clarinete7],
    },
  ];

  useEffect(() => {
    setData(instrumentosData);
  }, []);

  return (
    <div className="instrumentos-container">
      {data.map((instrumento) => (
        <div key={instrumento.id} className="instrument-section">
          <h2 className="title">{instrumento.nombre}</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={25}
            slidesPerView={5}
            loop={true}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper-container"
          >
            {instrumento.imagenes.map((imagen, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <img
                  src={imagen}
                  alt={`${instrumento.nombre} ${index + 1}`}
                  className="imagen-instrumento"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Instrumentos;
