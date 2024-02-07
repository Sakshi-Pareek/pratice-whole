import './App.css';
import { useEffect, useState } from 'react';
import About from './components/About';
import Chicago from './components/Chicago';
import Conference from './components/Conference';
import Footer from './components/Footer';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Previous from './components/Previous';
import Suponsor from './components/Suponsor';
import BackToTop from './assets/images/webp/BackToTop.webp'
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  // =======================aos============================
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // =======================preloader======================
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);
  }, []);
  // -----------------back-to-top------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <Header />
            <Chicago />
            <Conference />
            <Previous />
            <Suponsor />
            <About />
            <Footer />
            <div className={`${backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-[#F59330] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[1%] z-[2]" : "d-none"}`} onClick={() => top()}><img
              src={BackToTop}
              alt="BackToTop"
            /></div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
