


import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { postQuery } from '../../api/postQuery';
import { getQueryBanner } from '../../api/getQueryBanner';

function BookingModal({ show, handleClose, autoShowTime = null }) {
  // Initialize state more efficiently by combining related states
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    message: '',
    captchaAnswer: ''
  });
  
  const [uiState, setUiState] = useState({
    loading: false,
    status: null,
    errors: {},
    bannerImage: '',
    captcha: { question: '', answer: '' }
  });
  
  // Banner cache ref to prevent unnecessary reloading
  const bannerCacheRef = useRef('');
  // Add a ref to track if modal has already been auto-shown
  const hasAutoShownRef = useRef(false);

  // Generate captcha only when needed
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return { 
      question: `What is ${a} + ${b}?`, 
      answer: (a + b).toString() 
    };
  };

  // Pre-fetch banner image on component mount
  useEffect(() => {
    // Pre-fetch banner image on first load to cache it
    if (!bannerCacheRef.current) {
      getQueryBanner()
        .then((data) => {
          bannerCacheRef.current = data.enquiryImage || '';
        })
        .catch((err) => {
          console.error("Error pre-fetching banner image:", err);
        });
    }
    
    // Handle auto-show timer if specified
    if (autoShowTime && typeof autoShowTime === 'number' && !hasAutoShownRef.current) {
      const autoTimer = setTimeout(() => {
        // Only auto-show if not already showing and hasn't been auto-shown before
        if (!show && !hasAutoShownRef.current) {
          hasAutoShownRef.current = true; // Mark as auto-shown
          handleClose(true); // Pass true to indicate auto-show (if you need this info)
        }
      }, autoShowTime);
      
      return () => clearTimeout(autoTimer);
    }
  }, [autoShowTime, handleClose, show]);

  // Load banner image when modal is shown
  useEffect(() => {
    let isMounted = true;
    
    if (show) {
      // Reset form when modal opens
      setFormData({
        name: '',
        phone_number: '',
        message: '',
        captchaAnswer: ''
      });
      
      // Generate new captcha
      setUiState(prev => ({
        ...prev,
        loading: bannerCacheRef.current ? false : true,
        status: null,
        errors: {},
        captcha: generateCaptcha(),
        // Use cached banner if available
        bannerImage: bannerCacheRef.current || ''
      }));

      // Only fetch if not already cached
      if (!bannerCacheRef.current) {
        // Fetch banner image - no artificial delay
        getQueryBanner()
          .then((data) => {
            if (isMounted) {
              const bannerImg = data.enquiryImage || '';
              bannerCacheRef.current = bannerImg; // Cache the result
              setUiState(prev => ({
                ...prev,
                loading: false,
                bannerImage: bannerImg
              }));
            }
          })
          .catch((err) => {
            console.error("Error fetching banner image:", err);
            if (isMounted) {
              setUiState(prev => ({ ...prev, loading: false }));
            }
          });
      }
    }
    
    return () => { isMounted = false; };
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validation logic
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone_number)) newErrors.phone_number = 'Phone number must be 10 digits';
    
    if (!formData.captchaAnswer.trim()) newErrors.captchaAnswer = 'CAPTCHA is required';
    else if (formData.captchaAnswer !== uiState.captcha.answer) newErrors.captchaAnswer = 'Incorrect CAPTCHA';
    
    setUiState(prev => ({ ...prev, errors: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setUiState(prev => ({ ...prev, loading: true }));
    
    try {
      await postQuery({
        name: formData.name,
        phone_number: formData.phone_number,
        message: formData.message
      });
      
      setUiState(prev => ({ 
        ...prev, 
        loading: false,
        status: 'Thank you! Your booking has been submitted.' 
      }));
      
      // Close modal after successful submission
      setTimeout(() => {
        handleClose();
        setUiState(prev => ({ ...prev, status: null }));
      }, 1000); // Reduced from 3000ms
      
    } catch (error) {
      console.error("Error submitting booking form:", error);
      
      if (
        error.response &&
        error.response.status === 500 &&
        error.response.data?.message?.toLowerCase().includes('phone')
      ) {
        setUiState(prev => ({ 
          ...prev, 
          loading: false,
          status: 'This phone number has already been used. Please use a different one.',
          errors: { ...prev.errors, phone_number: 'Phone number already used' }
        }));
      } else {
        setUiState(prev => ({ 
          ...prev, 
          loading: false,
          status: 'Failed to submit. Please try again later.' 
        }));
      }
    }
  };

  // Destructure for cleaner JSX
  const { loading, status, errors, bannerImage, captcha } = uiState;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{fontWeight: 'bold'}}>Book Your Room</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        <Row className="g-0">
          <Col md={5} className="bg-light d-flex flex-column justify-content-center align-items-center p-4">
            <div className="text-center">
              <p>Welcome to The Urban Escape — get some exciting offers!</p>

              <div className="my-4">
                {loading && !bannerImage ? (
                  <div className="placeholder-glow w-100">
                    <div className="placeholder w-100" style={{ height: '200px', borderRadius: '0.25rem' }}></div>
                  </div>
                ) : (
                  <img
                    src={bannerImage || '/placeholder-image.jpg'} // Fallback image
                    alt="Special promotion"
                    className="img-fluid rounded shadow"
                    loading="lazy"
                    style={{ minHeight: '350px', minWidth: '250px', maxWidth: '250px', maxHeight: '400px' }} // Prevent layout shift
                  />
                )}
              </div>
            </div>
          </Col>

          <Col md={7} className="p-4">
            <h4 className="mb-4" style={{fontWeight: 'bold'}}>Enter Your Details</h4>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  disabled={loading}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="phone_number"
                  placeholder="Enter your mobile number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  isInvalid={!!errors.phone_number}
                  disabled={loading}
                />
                <Form.Control.Feedback type="invalid">{errors.phone_number}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>CAPTCHA: {captcha.question}</Form.Label>
                <Form.Control
                  type="text"
                  name="captchaAnswer"
                  placeholder="Your answer"
                  value={formData.captchaAnswer}
                  onChange={handleChange}
                  isInvalid={!!errors.captchaAnswer}
                  disabled={loading}
                />
                <Form.Control.Feedback type="invalid">{errors.captchaAnswer}</Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ backgroundColor: 'var(--btn-1)', border: 'none' }}
                disabled={loading}
              >
                {loading ? 'Please wait...' : 'Submit'}
              </Button>

              {status && <Alert className="mt-3 text-center" variant="info">{status}</Alert>}
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default BookingModal;