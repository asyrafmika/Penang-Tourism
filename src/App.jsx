import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Places from './Components/Places/Places';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Culture from './Components/Cultures/Culture.jsx';
import Gallery from './Components/Gallery/Gallery';
import Feedbacks from './Components/Feedbacks/Feedback';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Food from './Components/Food/Food';
import Hotel from './Components/Hotel/Hotel';
import AboutPage from './Pages/About/AboutPages';
import GalleryPage from './Pages/Gallery/GalleryPages'
import HotelPage from './Pages/Hotel/Hotelpage.jsx';
import FoodPage from './Pages/Food/FoodLifestyle.jsx';
import CulturePage from './Pages/Culture/CulturePage.jsx';
import PlacePage from './Pages/Place/DestinationPage.jsx';



const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router> 
      <div>
        
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                  <Title subTitle="OUR PLACES" title="What We Have To Offer" />
                  <Places />
                  <Title subTitle="ABOUT PENANG" title="Experience the Pearl of the Orient" />
                  <About setPlayState={setPlayState} />
                  <Title subTitle="Gallery" title="Places Photo" />
                  <Gallery />
                  <Title subTitle="Hotel" title="Places to Stay" />
                  <Hotel />
                  <Title subTitle="Culture" title="Our People" />
                  <Culture />
                  <Title subTitle="Food & Lifestyle" title="Delicious Choices for a Balanced Lifestyle" />
                  <Food />
                  <Title subTitle="FEEDBACK" title="What People Say About Penang?" />
                  <Feedbacks />
                  <Title subTitle="Contact Us" title="Get in touch" />
                  <Contact />
                  
                  <div>
                    <VideoPlayer playState={playState} setPlayState={setPlayState} />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/places" element={<PlacePage />} />


          </Routes>
          <Footer />
      </div>
    </Router>
  );
};

export default App;
