import React from 'react'
import { FaCalculator, FaClipboardCheck, FaHandshake, FaMapMarkedAlt } from 'react-icons/fa'
import { FaTruckFast } from 'react-icons/fa6'

const Performance = () => {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
        <div style={{
          backgroundImage:"url('https://medusa-sportwagen.de/wp-content/uploads/2024/04/Image_fahrzeuge_5.jpg')",
          backgroundSize:"cover",
          backgroundPosition:"center",
          height:"60vh",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          width:"100%"
        }}>
          <h1 className='text-white mt-8 text-2xl md:text-4xl font-extrabold   ' style={{textShadow: "2px 2px 4px rgba(0,0,0,0.5)",fontWeight:"700"}}>LEISTUNGEN</h1>

        </div>
        <div className="container mx-auto py-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
    
    {/* Individuelle Beratung */}
    <div className="flex flex-col items-center">
      <FaClipboardCheck className="text-red-500 text-5xl transition-transform duration-300 hover:rotate-12" />
      <h4 className="mt-3 text-lg font-bold">Individuelle Beratung</h4>
      <p className="text-sm mt-2 max-w-xs text-gray-500 hover:text-white transition-colors duration-300">
        Unser erfahrenes Verkaufspersonal steht Ihnen zur Seite, um Ihnen eine umfassende Beratung zu bieten. 
        Wir nehmen uns die Zeit, um Ihre Anforderungen zu verstehen und Ihnen das passende Fahrzeug vorzustellen.
      </p>
    </div>

    {/* Leasing und Finanzierung */}
    <div className="flex flex-col items-center">
      <FaCalculator className="text-red-500 text-5xl transition-transform duration-300 hover:rotate-12" />
      <h4 className="mt-3 text-lg font-bold">Leasing und Finanzierung</h4>
      <p className="text-sm mt-2 max-w-xs text-gray-500 hover:text-white transition-colors duration-300">
        Wir bieten flexible Leasing- und Finanzierungsoptionen. Unsere Finanzierungsexperten stehen Ihnen zur Verfügung, 
        um maßgeschneiderte Lösungen zu finden. 
      </p>
    </div>

    {/* Inzahlungnahme von Fahrzeugen */}
    <div className="flex flex-col items-center">
      <FaHandshake className="text-red-500 text-5xl transition-transform duration-300 hover:rotate-12" />
      <h4 className="mt-3 text-lg font-bold">Inzahlungnahme von Fahrzeugen</h4>
      <p className="text-sm mt-2 max-w-xs text-gray-500 hover:text-white transition-colors duration-300">
        Möchten Sie Ihren aktuellen Wagen gegen einen unserer Fahrzeuge eintauschen? Wir bieten Ihnen die Möglichkeit der Inzahlungnahme.
        Bei Medusa-Sportwagen bewerten wir Ihr Fahrzeug fair und bieten Ihnen eine transparente und unkomplizierte Abwicklung.
      </p>
    </div>

  </div>
</div>

{/* Second Container - Aligned Properly for 2 Items */}
<div className="container mx-auto py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-center justify-center gap-x-20">
    
    {/* Abwicklung des Exports */}
    <div className="flex flex-col items-center">
      <FaTruckFast className="text-red-500 text-5xl transition-transform duration-300 hover:rotate-12" />
      <h4 className="mt-3 text-lg font-bold">Abwicklung des Exports</h4>
      <p className="text-sm mt-2 max-w-xs text-gray-500 hover:text-white transition-colors duration-300">
        Medusa-Sportwagen unterstützt Sie gerne bei der Abwicklung von Export und Zollformalitäten. 
        Egal, ob Sie Ihren Sportwagen in ein anderes Land exportieren möchten oder einen Import planen, 
        unser erfahrenes Team begleitet Sie durch den gesamten Prozess.
      </p>
    </div>

    {/* Überführung von Fahrzeugen */}
    <div className="flex flex-col items-center">
      <FaMapMarkedAlt className="text-red-500 text-5xl transition-transform duration-300 hover:rotate-12" />
      <h4 className="mt-3 text-lg font-bold">Überführung von Fahrzeugen</h4>
      <p className="text-sm mt-2 max-w-xs text-gray-500 hover:text-white transition-colors duration-300">
        Wir bieten Ihnen einen erstklassigen Überführungsservice für Ihr Fahrzeug. 
        Unser engagiertes Team kümmert sich um alle logistischen Details, 
        um sicherzustellen, dass Ihr Wagen sicher und termingerecht bei Ihnen ankommt.
      </p>
    </div>

  </div>
</div>

<div
  className="bg-cover bg-center h-[50vh] opacity-50 flex items-center justify-center w-full relative"
  style={{
    backgroundImage: "url('https://medusa-sportwagen.de/wp-content/uploads/2024/03/LAMBORGHINI-CENTENARIO.jpg')",
  }}
>
  <h1 className="text-white text-4xl font-bold text-center px-4 sm:text-3xl md:text-4xl lg:text-5xl">
    Unleash the Extraordinary
  </h1>
</div>






    </div>
    </>
  )
}

export default Performance