 import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ContactFormModal.css';

const ContactFormModal = ({ show, onClose, formData, onChange, onSubmit }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    
    // Add animation before submitting
    setIsClosing(true);
    setShowThankYou(true);
    
    setTimeout(() => {
      onSubmit();
      // Keep thank you message visible for a moment before closing
      setTimeout(() => {
        setIsClosing(false);
        setShowThankYou(false);
      }, 500);
    }, 600);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 600);
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="md"
      backdrop="static"
      aria-labelledby="contact-form-modal"
      className={`animated-modal ${isClosing ? 'closing' : ''}`}
    >
      <div className="modal-content-wrapper">
        <Modal.Header closeButton className="bg-primary text-white rounded-top">
          <Modal.Title id="contact-form-modal" className="modal-title-animated">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span>&nbsp;</span>
            <span>U</span>
            <span>s</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`modal-body-animated ${isClosing ? 'modal-scramble' : ''}`}>
          {showThankYou ? (
            <div className="thank-you-message">
              <div className="thank-you-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>Your message has been submitted successfully.</p>
              <p>We will get back to you soon!</p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit} className="animated-form">
              <Form.Group 
                className={`mb-3 form-group-animated ${activeField === 'name' ? 'active' : ''}`} 
                controlId="formName"
              >
                <Form.Label className="label-animated">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={onChange}
                  placeholder="Enter your name"
                  required
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className="input-animated"
                />
              </Form.Group>
              
              <Form.Group 
                className={`mb-3 form-group-animated ${activeField === 'phone' ? 'active' : ''}`} 
                controlId="formPhone"
              >
                <Form.Label className="label-animated">Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={onChange}
                  placeholder="Enter your phone number"
                  required
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className="input-animated"
                />
              </Form.Group>

              <Form.Group 
                className={`mb-3 form-group-animated ${activeField === 'address' ? 'active' : ''}`} 
                controlId="formAddress"
              >
                <Form.Label className="label-animated">Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address || ''}
                  onChange={onChange}
                  placeholder="Enter your address"
                  required
                  onFocus={() => handleFocus('address')}
                  onBlur={handleBlur}
                  className="input-animated"
                />
              </Form.Group>

              <Form.Group 
                className={`mb-3 form-group-animated ${activeField === 'message' ? 'active' : ''}`} 
                controlId="formMessage"
              >
                <Form.Label className="label-animated">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message || ''}
                  onChange={onChange}
                  placeholder="Enter your message"
                  rows={3}
                  required
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className="input-animated"
                />
              </Form.Group>

              <Modal.Footer className="px-0 footer-animated">
                <Button
                  variant="outline-danger"
                  onClick={handleClose}
                  className="btn-cancel"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-submit"
                >
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ContactFormModal;