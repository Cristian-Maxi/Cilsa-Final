import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import NewsLetter from '../components/Newsletter/NewsLetter'
import Body from '../components/Body/Body';

const Home = () => {

  return (  
      <>
      <Navbar />
      <Hero />
      <Body />
      <NewsLetter />
      <Footer />
      </>
  );
}

export default Home