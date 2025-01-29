import React from 'react'

import Products from '../component/Products';

const Vehicles = () => {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
      <div style={{backgroundImage:"url('https://medusa-sportwagen.de/wp-content/uploads/2024/04/Image_fahrzeuge_4.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"60vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"}}>
          <h1 className="text-white mt-8 text-2xl md:text-4xl font-extrabold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)", fontWeight: "700" }}>
          FAHRZEUGE
          </h1>

        </div>
        <div className="row ms-3 mt-4">
       <Products/>
        </div>

    </div>
    
    </>
  )
}

export default Vehicles