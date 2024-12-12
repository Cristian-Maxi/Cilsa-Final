import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Recibe Exclusivas Noticias De Música en Tu Mail</h1>
      <p>Suscribite a nuestro newletter y mantente actualizado</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
