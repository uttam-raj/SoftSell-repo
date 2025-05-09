import './App.css'
import { useState } from 'react';
import {Helmet} from 'react-helmet';
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
    <Helmet>
    <title>SoftSell | Sell Unused Software Licenses</title>
        <meta name="description" content="Quickly and securely sell your unused software licenses with SoftSell. Get a free valuation and get paid fast." />
        <meta name="keywords" content="sell software licenses, unused license resale, software resale, IT asset recovery, SoftSell" />
        <meta name="author" content="SoftSell" />
        <meta property="og:title" content="SoftSell | Sell Unused Software Licenses" />
        <meta property="og:description" content="Quickly and securely sell your unused software licenses and get paid fast." />
        <meta property="og:type" content="website" />
    </Helmet>
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
