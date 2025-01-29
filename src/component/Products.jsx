import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt } from 'react-icons/fa';
import EnquiryModal from './EnquiryModal';

const productsData = [
  {
    id: 1,
    carName: 'Audi RSQ8',
    model: 'RSQ8',
    price: '157.900 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/80/80a91d9b-513b-44c2-988b-dad0487c4957?rule=mo-1600.jpg',
    description: 'RSQ8 PERFORMANCE FACELIFT CARBON CERAMIC 25 FULL',
    manufacturer: 'Audi',
    power: '471 kW / 640 PS',
    mileage: '10 km',
    vat: '19%'
  },
  {
    id: 2,
    carName: 'Bentley Continental GTC',
    model: 'Continental GTC',
    price: '280.900 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/a1/a18a5914-75b0-436c-838a-ddbfcd155f67?rule=mo-1600.jpg',
    description: 'CONTINENTAL GTC V8 S MULLINER CARBON FULLOPTION!',
    manufacturer: 'Bentley',
    power: '404 kW / 550 PS',
    mileage: '5 km',
    vat: '19%'
  },
  {
    id: 3,
    carName: 'BMW M5',
    model: 'M5',
    price: '172.550 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/00/0098cc62-8da5-497b-8f3e-341a37ae6335?rule=mo-1600.jpg',
    description: 'CARBON EXT&INT CERAMIC INDIVIDUAL B&W 25 FULL',
    manufacturer: 'BMW',
    power: '535 kW / 727 PS',
    mileage: '8 km',
    vat: '19% '
  },
  {
    id: 4,
    carName: 'Ferrari SF90',
    model: 'SF90',
    price: '416.500 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/86/86729518-eafc-409f-9d43-e6b7966bb8fe?rule=mo-1600.jpg',
    description: 'CARBON INT&EXT JBL LIFT DAYTONASEAT FULL',
    manufacturer: 'Ferrari',
    power: '736 kW / 1001 PS',
    mileage: '10.800 km',
    vat: '19% '
  },
  {
    id: 5,
    carName: 'Ferrari Purosangue',
    model: 'Purosangue',
    price: '666.400 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/33/33e85bb5-c9a1-46c1-9294-0c9fafc40cf0?rule=mo-1600.jpg',
    description: 'V12 CARBONPACK EXT&INT PANO MY25 FULL',
    manufacturer: 'Ferrari',
    power: '533 kW / 725 PS',
    mileage: '0 km',
    vat: '19% '
  },
  {
    id: 6,
    carName: 'Ferrari 296 GTB',
    model: '296 GTB',
    price: '289.800 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/6c/6c3999a9-3108-424b-a180-c7f045eee93e?rule=mo-1600.jpg',
    description: 'RED CARBON LIFT PASSENGERDISPLAY READY !',
    manufacturer: 'Ferrari',
    power: '610 kW / 829 PS',
    mileage: '10 km',
    vat: '19% '
  },
  {
    id: 7,
    carName: 'Ferrari Roma',
    model: 'Roma',
    price: '255.000 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/56/56f5e994-15c2-4802-af29-3a5269c14a33?rule=mo-1600.jpg',
    description: 'DAYTONASEAT CARBON JBL ADAS MY23 NEW FULL!',
    manufacturer: 'Ferrari',
    power: '456 kW / 620 PS',
    mileage: '10 km',
    vat: '19% '
  },
  {
    id: 8,
    carName: 'Lamborghini Urus',
    model: 'Urus',
    price: '452.200 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/8f/8f0aa5bb-4489-44e1-8903-9cea16d8cfec?rule=mo-1600.jpg',
    description: 'SE CARBONPACK EXT&INT MASSAGE PANO FULLOPT!',
    manufacturer: 'Lamborghini',
    power: '588 kW / 799 PS',
    mileage: '10 km',
    vat: '19% '
  },
  {
    id: 9,
    carName: 'Land Rover Range Rover',
    model: 'Range Rover',
    price: '199.800 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/e4/e46240b3-b952-4dcb-9894-95a5e5edb41d?rule=mo-1600.jpg',
    description: 'VOGUE D350 HSE FOND TV MASSAGE FULL!',
    manufacturer: 'Land Rover',
    power: '257 kW / 349 PS',
    mileage: '10 km',
    vat: '19% '
  },
  {
    id: 10,
    carName: 'Maybach MAYBACH',
    model: '57 ',
    price: '69.999 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/49/49e7f0f9-90c2-46f5-aea5-33a7efc7ec5f?rule=mo-1600.jpg',
    description: 'DUOTONE FIRSTCLASS FOND TV FULLOPTION',
    manufacturer: 'Maybach ',
    power: '405 kW / 551 PS',
    mileage: '89.800 km',
    vat: '19% '
  },
  {
    id: 11,
    carName: 'McLaren 750S ',
    model: '750S ',
    price: '342.720 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/c0/c0bec20a-4823-482c-966e-992b77dc454e?rule=mo-1600.jpg',
    description: 'COUPE MY25 CARBON EXT&INT B&W LIFT FULLOPT!',
    manufacturer: 'McLaren ',
    power: '552 kW / 751 PS',
    mileage: '10 km',
    vat: '19% '
  },
  {
    id: 12,
    carName: 'Mercedes-Benz G 63 AMG ',
    model: 'G 63 AMG ',
    price: '3259.999 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/0c/0cb83594-5e4b-4680-8c53-b0a2396e1989?rule=mo-1600.jpg',
    description: 'FACELIFT MY25 BURMESTER NIGHTPACK READY',
    manufacturer: 'Mercedes-Benz ',
    power: '430 kW / 585 PS',
    mileage: '10 km',
    vat: '19% '
  },
  {
    id: 13,
    carName: 'Porsche 911 ',
    model: '911 ',
    price: '215.000 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/d9/d9f8c6e8-beff-477e-a02a-44ddb9114e33?rule=mo-1600.jpg',
    description: 'GT3 CLUBSPORT CARBONSEAT LIFT BOSE FU',
    manufacturer: 'Porsche ',
    power: '375 kW / 510 PS',
    mileage: '3.800 km',
    vat: '19% '
  },
  {
    id: 14,
    carName: 'Porsche 992 ',
    model: '992 ',
    price: '374.850 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/15/158faae5-0a29-4871-9b66-5883c66bce75?rule=mo-1600.jpg',
    description: 'GT3 RS WEISSACH CARBON CERAMIC LIFT 24 FULL!',
    manufacturer: 'Porsche ',
    power: '386 kW / 525 PS',
    mileage: '10 km',
    vat: '19% '
  },
  {
    id: 15,
    carName: 'Mercedes-Benz G 63 AMG ',
    model: 'G 63 AMG ',
    price: '219.800 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/4d/4dbc9b50-78b2-4266-880b-19e5cfa6c2d1?rule=mo-1600.jpg',
    description: 'RED INT CARBON NIGHTPACKII MASSAGE FULL',
    manufacturer: 'Mercedes-Benz ',
    power: '430 kW / 585 PS',
    mileage: '35.000 km',
    vat: '19% '
  },
  {
    id: 16,
    carName: 'Mercedes-Benz G 63 AMG',
    model: 'G 63 AMG',
    price: '215.000 €',
    imgSrc: 'https://img.classistatic.de/api/v1/mo-prod/images/5e/5e11b393-6227-4d79-b2b3-ecdb94060203?rule=mo-1600.jpg',
    description: 'CARBON NIGHTPACK MY24 MASSAGE FULLOPT!',
    manufacturer: 'Mercedes-Benz ',
    power: '430 kW / 585 PS',
    mileage: '10 km',
    vat: '19% '
  },
];

const Products = ({ limit }) => {
  const [show, setShow] = useState(false);
  const [enquiry, setEnquiry] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    carName: '',
    model: '',
    price: ''
  });

  const handleShow = (product) => {
    setEnquiry({
      name: '',
      email: '',
      phoneNumber: '',
      carName: product.carName,
      model: product.model,
      price: product.price
    });
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiry({ ...enquiry, [name]: value });
  };

  const displayedProducts = limit ? productsData.slice(0, limit) : productsData;

  return (
    <div className="container mx-auto px-4 mt-4">
    <div className="flex flex-wrap justify-center">
      {displayedProducts.map(product => (
        <Card key={product.id} style={{ width: '18rem', backgroundColor: "#333333" }} className="mb-4 mx-2">
          <div style={{ height: '200px', overflow: 'hidden' }}>
            <Card.Img variant="top" src={product.imgSrc} style={{ height: '100%', objectFit: 'cover' }} />
          </div>
          <Card.Body className="text-white p-4">
            <Card.Title className="text-lg font-bold mb-2">{product.carName}</Card.Title>
            <p className='font-thin text-xs mb-2'>{product.description}</p>
            <p className='text-xs mb-1'><span className='font-bold'>Hersteller:</span> {product.manufacturer}</p>
            <hr className='border-gray-700 my-1' />
            <p className='text-xs mb-1'><span className='font-bold'>Modell:</span> {product.model}</p>
            <hr className='border-gray-700 my-1' />
            <p className='text-xs mb-1'><span className='font-bold'>Leistung:</span> {product.power}</p>
            <hr className='border-gray-700 my-1' />
            <p className='text-xs mb-1'><span className='font-bold'>Kilometerstand:</span> {product.mileage}</p>
            <hr className='border-gray-700 my-1' />
            <p className='text-xs mb-1'><span className='font-bold'>Preis:</span> {product.price}</p>
            <hr className='border-gray-700 my-1' />
            <p className='text-xs mb-3'><span className='font-bold'>MwSt:</span> {product.vat}</p>
            <Button variant="success" className="text-xs py-1 px-2" onClick={() => handleShow(product)}>Jetzt anfragen</Button>
          </Card.Body>
        </Card>
      ))}
    </div>

    <EnquiryModal show={show} handleClose={handleClose} enquiry={enquiry} handleChange={handleChange} />
  </div>
  );
};

export default Products;
