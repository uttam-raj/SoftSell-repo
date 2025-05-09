import './App.css'
import { useState } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItsWork';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { BsToggle2Off,BsToggle2On  } from "react-icons/bs";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
    <header className="header">
        <div className="logo">SoftSell</div>
        <button className="toggle-btn" onClick={toggleTheme}>
          {darkMode ? <BsToggle2Off /> : <BsToggle2On />}
        </button>
      </header>
      <Hero/>
      <HowItWorks/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactForm/>
      </div>
    </>
  )
}

export default App
