import './Hero.css';
import hero_image from '../../assets/piano-banner.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='hero-banner' src={hero_image} alt="Imagen Banner" />
    </div>
  )
}

export default Hero
