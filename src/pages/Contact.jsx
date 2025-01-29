import React from 'react';

const Contact = () => {
  return (
    <>
      <div style={{backgroundColor:"black"}}>
        <div
          style={{
            backgroundImage: "url('https://medusa-sportwagen.de/wp-content/uploads/2024/03/Showroom-01-Cam-11_2024.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h1 className="text-white mt-8 text-2xl md:text-4xl font-extrabold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)", fontWeight: "700" }}>
            KONTAKT
          </h1>
        </div>
        <div style={{  height: "150vh" }} >
          <div>
              <h4 className="text-white mt-5 ms-5 me-5">KARTENANSICHT</h4>
              <img
    src="https://medusa-sportwagen.de/wp-content/uploads/2024/04/medusa_sportwagen_kartenansicht.png.webp"
    alt="Kartenansicht"
    className="mx-5 sm:mx-10 lg:mx-20 img-fluid w-75"
  />
          </div>
          <div style={{marginTop:"80px", marginLeft:"80px"}}>
            <img className='img-fluid    w-25'  src="https://medusa-sportwagen.de/wp-content/uploads/elementor/thumbs/Logo-MEDUSA-SPORTWAGEN-GmbH-weiss-455x100px-qqkj6nl03pxg4w3ypjzo20vbbeqdxbfsklryoudvr4.png" alt="" />
            <p className=' text-white mt-2' ><span style={{fontWeight:"700"}}>MEDUSA-SPORTWAGEN </span>GmbH</p>
            <p className='text-white' > <span style={{fontWeight:"700"}}>Firmensitz (kein Kundenverkehr):</span>  <br /><span>Südliche Münchner Straße 15 <br />82031 Grünwald</span> </p>
            <p className="text-white"> <span style={{fontWeight:"700"}}>Showroom:</span> <br /> <span>Wasserburger Landstraße 282 <br />81827 München</span></p>
            <p className="text-white"> <span style={{fontWeight:"700"}}>Telefon:</span>+49 (0) 89 568 266 31</p>
            <p className="text-white"><span style={{fontWeight:"700"}}>Mobil 1:</span>+49 (0)176 177 772 11</p>
            <p className="text-white"><span style={{fontWeight:"700"}}>Mobil 2:</span>+49 (0)176 177 772 12</p>
            <p className="text-white"><span style={{fontWeight:"700"}}>Mobil 3:</span> +49 (0)151 177 772 15</p>
            <p>
  <span className='text-white' style={{ fontWeight: "700" }}>Email:</span> 
  <span className="text-danger">info@medusa-sportwagen.de</span>
</p>
<p>
  <span className='text-white' style={{ fontWeight: "700" }}>Internet:</span> 
  <span className="text-danger">www.medusa-sportwagen.de</span>
</p>



          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
