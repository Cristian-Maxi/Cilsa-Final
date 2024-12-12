import app from '../../assets/app_store.png';
import play from '../../assets/play_store.png';
import './App.css';

const App = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Para una mejor experiencia, descargate nuestra aplicación <br /> Todo Música App</p>
        <div className="app-download-platforms">
            <img src={play} alt="" />
            <img src={app} alt="" />
        </div>
      
    </div>
  )
}

export default App
