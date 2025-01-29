import React, { useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import 'animate.css';
import { useState } from "react";
import Products from '../component/Products';
import { Link } from 'react-router-dom';




const imageSets = [
  "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_23-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_36-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_24-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_31-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_28-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_28-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_37-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_33-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_29-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_25-500x500px.jpg.webp",
 "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_10-500x500px.jpg.webp",
  "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_10-500x500px.jpg.webp",
  "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_10-500x500px.jpg.webp",
  "https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_10-500x500px.jpg.webp"
];



const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = imageSets.slice(startIndex, startIndex + 4);

  const nextSlide = () => {
    if (startIndex + 4 < imageSets.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div className="bg-black">
        <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/2015_-_porsche_911_carrera_s_3.jpg"
              alt="Second slide"
              style={{ height: '550px', objectFit: 'cover' }} // Inline CSS for height
            />
            <Carousel.Caption>
              <h3 className='animate__animated animate__backInLeft text-3xl md:text-4xl lg:text-5xl font-bold'>
                KRAFT & ELEGANZ
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/LAMBORGHINI-CENTENARIO.jpg"
              alt="First slide"
              style={{ height: '550px', objectFit: 'cover' }} // Inline CSS for height
            />
            <Carousel.Caption>
              <h3 className='animate__animated animate__bounceInRight text-3xl md:text-4xl lg:text-5xl font-bold'>
                HIGH-END PERFORMANCE
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/Porsche-GT3-RS.jpg"
              alt="Third slide"
              style={{ height: '550px', objectFit: 'cover' }} // Inline CSS for height
            />
            <Carousel.Caption>
              <h3 className='animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold'>
                LUXUS, LEISTUNG, LEGENDE
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/2021_lamborghini_countach.jpg"
              alt="Third slide"
              style={{ height: '550px', objectFit: 'cover' }} // Inline CSS for height
            />
            <Carousel.Caption>
              <h3 className='animate__animated animate__fadeInRight text-3xl md:text-4xl lg:text-5xl font-bold'>
                SPEED & STIL VEREINT
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/rolls-royce_ghost_4.jpg"
              alt="Third slide"
              style={{ height: '550px', objectFit: 'cover' }} // Inline CSS for height
            />
            <Carousel.Caption>
              <h3 className='animate__animated animate__fadeInBottomLeft text-3xl md:text-4xl lg:text-5xl font-bold'>
                DESIGN & HOCHSTLEISTUNG
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/mercedes-benz_g63_amg_2.jpg"
              alt="Third slide"
              style={{ height: '550px', objectFit: 'cover' }} // Inline CSS for height
            />
            <Carousel.Caption>
              <h3 className='animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold'>
                CAR PASSION ENTFESS
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></div>
        <div style={{ height: "150px" }} className="bg-black overflow-hidden whitespace-nowrap py-2">
          <div
            className="inline-block"
            style={{
              display: 'inline-block',
              animation: 'marquee 30s linear infinite',
              transform: 'translateX(-100%)' // Start from left
            }}
          >
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/mercedes_logo_rgb_200x160px.webp"
              alt="Brand Logo 1"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/land_rover_logo_rgb_200x160px.webp"
              alt="Brand Logo 2"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/aston_logo_rgb_200x160px.webp"
              alt="Brand Logo 3"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/porsche_logo_rgb_200x160px.webp"
              alt="Brand Logo 4"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/04/lamborghini_logo_rgb_200x160px_02.webp"
              alt="Brand Logo 5"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/ferrari_logo_rgb_200x160px.webp"
              alt="Brand Logo 6"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
             <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/rolls_royce_logo_rgb_200x160px.webp"
              alt="Brand Logo 6"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
             <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/04/audi_logo_rgb_200x160px_02.webp"
              alt="Brand Logo 6"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/bugatti_logo_rgb_200x160px.webp"
              alt="Brand Logo 6"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
             <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/maserati_logo_rgb_200x160px.webp"
              alt="Brand Logo 6"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
             <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/mclaren_logo_rgb_200x160px.webp"
              alt="Brand Logo 6"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/03/bentley_logo_rgb_200x160px.webp"
              alt="Brand Logo 6"
              className="inline-block mr-6 h-50 object-contain" // Increase image size
            />
          </div>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% {
                transform: translateX(100%); // Start from right
              }
              100% {
                transform: translateX(-100%); // Move to left
              }
            }
          `}
        </style>
        

        <div className="flex flex-col items-center justify-center" style={{backgroundColor:"#333333"}}>
  <img src="https://medusa-sportwagen.de/wp-content/uploads/elementor/thumbs/Logo-MEDUSA-SPORTWAGEN-GmbH-weiss-3000x800px-1-qqkj6nl03pxg4w3ypjzo20vbbeqdxbfsklryoudvr4.png" alt="Medusa Sportwagen Logo" />
  <p className='text-white'><span style={{fontWeight:"600"}}>Medusa-Sportwagen</span> ist mehr als nur ein Händler von Sportwagen.</p>
  <p className="text-white">Wir sind eine Gemeinschaft von Sportwagen-Enthusiasten, die die Faszination und Begeisterung für diese außergewöhnlichen Fahrzeuge teilen.</p><br />
  <p className="text-white">Entdecken Sie eine exklusive Auswahl an Fahrzeugen, die außergewöhnliche Leistung und elegantes Design bieten.</p>
  <p className="text-white">Jedes Fahrzeug wird sorgfältig geprüft, um unseren hohen Standards gerecht zu werden. </p>
  <p className="text-white">Unser engagiertes Team steht bereit, um Ihnen ein individuelles Fahrerlebnis zu bieten.</p>
  <p className="text-white">Nehmen Sie Kontakt mit uns auf, um einen persönlichen Termin zu vereinbaren.</p>
</div>
<div
  className="bg-cover bg-center h-[50vh] opacity-50 flex items-center justify-center w-full relative blur-background"
  style={{
    backgroundImage: "url('https://medusa-sportwagen.de/wp-content/uploads/2024/03/Home-Carousel-2024_26-500x500px.jpg.webp')",
  }}
>
  <h1 className="text-white text-5xl font-bold text-center px-4 sm:text-3xl md:text-4xl lg:text-5xl">
    Drive in Style, Drive with Elegance
  </h1>
</div>

<div style={{ backgroundColor: "#333333" }} className="text-white py-12">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="p-6 rounded-lg shadow-lg  hover:bg-gray-700 transition duration-300">
        <h2 className="text-xl font-semibold mb-4">Individuelle Beratung</h2>
        <p className="text-sm">Unser erfahrenes Verkaufspersonal steht Ihnen zur Seite, um Ihnen eine umfassende Beratung zu bieten.</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg  hover:bg-gray-700 transition duration-300">
        <h2 className="text-xl font-semibold mb-4">Leasing & Finanzierung</h2>
        <p className="text-sm">Wir bieten Ihnen flexible Leasing- und Finanzierungsoptionen an, um Ihnen den Zugang zu Ihrem Traumwagen zu erleichtern.</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg  hover:bg-gray-700 transition duration-300">
        <h2 className="text-xl font-semibold mb-4">Inzahlungnahme</h2>
        <p className="text-sm">Wir bewerten Ihr Fahrzeug fair und bieten Ihnen eine transparente und unkomplizierte Abwicklung.</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg  hover:bg-gray-700 transition duration-300">
        <h2 className="text-xl font-semibold mb-4">Abwicklung von Export</h2>
        <p className="text-sm">Egal, ob Sie Ihren Sportwagen in ein anderes Land exportieren möchten oder einen Import planen, unser erfahrenes Team begleitet Sie durch den gesamten Prozess.</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg  hover:bg-gray-700 transition duration-300">
        <h2 className="text-xl font-semibold mb-4">Überführung von Fahrzeugen</h2>
        <p className="text-sm">Unser engagiertes Team kümmert sich um alle logistischen Details, um sicherzustellen, dass Ihr Fahrzeug sicher und termingerecht bei Ihnen ankommt.</p>
      </div>
      <div className="p-6 rounded-lg shadow-lg  hover:bg-gray-700 transition duration-300">
        <h2 className="text-xl font-semibold mb-4">Kfz-Versicherung & Garantie</h2>
        <p className="text-sm">Wir helfen Ihnen, die richtige Versicherung und Garantieleistungen für Ihr Fahrzeug zu finden, damit Sie sorgenfrei fahren können.</p>
      </div>
    </div>
  </div>
</div>

<div className="flex items-center relative w-full overflow-hidden">
      <button 
        onClick={prevSlide} 
        className="absolute left-4 bg-transparent text-white p-2 rounded-full"
        disabled={startIndex === 0}
      >
        ◀
      </button>
      <div className="flex w-full justify-center gap-4">
        {visibleImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Slide ${startIndex + index}`} 
            className="w-64 h-64 mt-5 mb-4 object-cover transition-transform duration-500 ease-in-out"
          />
        ))}
      </div>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 bg-transparent text-white p-2 rounded-full"
        disabled={startIndex + 4 >= imageSets.length}
      >
        ▶
      </button>
    </div>

    <div className="flex flex-col items-center justify-center" style={{ backgroundColor: "#333333" }}>
      <h2 className="text-white mt-5" style={{ fontWeight: "600" }}>NEUESTE FAHRZEUGE</h2>
      <div className="flex flex-wrap justify-center mt-4">
        <Products limit={4} />
        <Link to="/vehicles">
      <button className="px-4 py-2 mb-5 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        ALLE FAHRZEUGE
      </button>
    </Link>      </div>
    </div>



      </div>
    </>
  );
};

export default Home;
