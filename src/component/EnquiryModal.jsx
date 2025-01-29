import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const EnquiryModal = ({ show, handleClose, enquiry, handleChange }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cardealers-cxu7.onrender.com/client/enquiry3', {
        name: enquiry.name,
        emailId: enquiry.email,
        phoneNumber: enquiry.phoneNumber,
        carName: enquiry.carName,
        price: enquiry.price,
        model: enquiry.model
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        alert('Anfrage erfolgreich gestellt!');
      } else {
        alert('Anfrage konnte nicht eingereicht werden.');
      }
    } catch (error) {
      alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enquiry Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Geben Sie Ihren Namen ein" 
              name="name" 
              value={enquiry.name} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Geben Sie Ihre E-Mail-Adresse ein" 
              name="email" 
              value={enquiry.email} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Telefonnummer</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Geben Sie Ihre Telefonnummer ein" 
              name="phoneNumber" 
              value={enquiry.phoneNumber} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group controlId="formCarName">
            <Form.Label>Name des Fahrzeugs</Form.Label>
            <Form.Control 
              type="text" 
              name="carName" 
              value={enquiry.carName} 
              readOnly 
            />
          </Form.Group>
          <Form.Group controlId="formModel">
            <Form.Label>Modell</Form.Label>
            <Form.Control 
              type="text" 
              name="model" 
              value={enquiry.model} 
              readOnly 
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Preis</Form.Label>
            <Form.Control 
              type="text" 
              name="price" 
              value={enquiry.price} 
              readOnly 
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Schließen
            </Button>
            <Button variant="primary"  type="submit">
              Anfrage einreichen
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EnquiryModal;
