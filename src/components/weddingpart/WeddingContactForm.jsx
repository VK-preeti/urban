// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, Form, Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHeart, FaGlassCheers, FaRing, FaCalendarAlt, FaUtensils, FaCamera, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { postWeddingForm } from '../../api/postWeddingForm';

 

// function WeddingContactForm() {

//      const [isVisible, setIsVisible] = useState({
//     form: false
//     // Add other sections if needed
//   });

//    useEffect(() => {
//       generateCaptcha();
//     }, []);
  
//     const generateCaptcha = () => {
//       const a = Math.floor(Math.random() * 10);
//       const b = Math.floor(Math.random() * 10);
//       setCaptcha({ question: `What is ${a} + ${b}?`, answer: (a + b).toString() });
//     };
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData(prev => ({ ...prev, [name]: value }));
//     };
  

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
//     if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
//     else if (!/^[0-9]{10}$/.test(formData.phone_number)) newErrors.phone_number = 'Phone must be 10 digits';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';
//     if (!formData.captchaAnswer.trim()) newErrors.captchaAnswer = 'CAPTCHA is required';
//     else if (formData.captchaAnswer !== captcha.answer) newErrors.captchaAnswer = 'Incorrect CAPTCHA';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (!validateForm()) return;
  
//       try {
//         await postWeddingForm({
//           name: formData.name,
//           email: formData.email,
//           phone_number: formData.phone_number,
//           message: formData.message
//         });
//         setStatus('Thank you! Your message has been submitted.');
//         setFormData({
//           name: '',
//           email: '',
//           phone_number: '',
//           message: '',
//           captchaAnswer: ''
//         });
//         generateCaptcha();
//       } catch (error) {
//         console.error("Submission error:", error);
//         setStatus('Failed to submit. Please try again later.');
//       }
//     };
  
//   return (
//     <div>
//       {/* Contact Form */}
//       <section id="section-form" className="py-5 text-white" style={{ backgroundColor: 'var(--btn-1)' }}>
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={8} className={`text-center ${isVisible.form ? 'animate__animated animate__fadeInUp' : ''}`}>
//               <h2 className="display-5 mb-4">Begin Your Wedding Journey</h2>
//               <p className="lead mb-5">Contact our wedding specialists to start planning your perfect day</p>
              
//               <Card className="border-0 p-4 text-dark">
//                 <Card.Body>
//                   <Form>
//                     <Row className="g-3">
//                       <Col md={6}>
//                         <Form.Group style={{textAlign: 'left'}}>
//                           <Form.Label  >Your Name</Form.Label>
//                           <Form.Control type="text" placeholder="Enter your name" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group style={{textAlign: 'left'}}>
//                           <Form.Label>Partner's Name</Form.Label>
//                           <Form.Control type="text" placeholder="Enter your partner's name" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group style={{textAlign: 'left'}}>
//                           <Form.Label>Email</Form.Label>
//                           <Form.Control type="email" placeholder="Enter email" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group style={{textAlign: 'left'}}>
//                           <Form.Label>Phone</Form.Label>
//                           <Form.Control type="tel" placeholder="Enter phone number" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group style={{textAlign: 'left'}}>
//                           <Form.Label>Estimated Guest Count</Form.Label>
//                           <Form.Select>
//                             <option>Select guest count</option>
//                             <option>Less than 50</option>
//                             <option>50-100</option>
//                             <option>100-150</option>
//                             <option>150-200</option>
//                             <option>200+</option>
//                           </Form.Select>
//                         </Form.Group>
//                       </Col>
//                       <Col md={6}>
//                         <Form.Group style={{textAlign: 'left'}}>
//                           <Form.Label   >Preferred Wedding Date</Form.Label>
//                           <Form.Control type="date" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={12}>
//                         <Form.Group style={{textAlign: 'left'}}>
//                           <Form.Label   >Additional Details</Form.Label>
//                           <Form.Control as="textarea" rows={3} placeholder="Tell us about your vision for your special day" />
//                         </Form.Group>
//                       </Col>
//                       <Col md={12} className="text-center mt-4">
//                         <Button variant="primary" size="lg" className="px-5 btn-custom">Submit Request</Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   )
// }

// export default WeddingContactForm


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postWeddingForm } from '../../api/postWeddingForm';

function WeddingContactForm() {
  const [formData, setFormData] = useState({
    your_name: '',
    partner_name: '',
    email: '',
    phone: '',
    guest_count: '',
    wed_date: '',
    add_detail: '',
    captchaAnswer: ''
  });

  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ question: `What is ${a} + ${b}?`, answer: (a + b).toString() });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.your_name.trim()) newErrors.your_name = 'Your name is required';
    if (!formData.partner_name.trim()) newErrors.partner_name = 'Partner name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.guest_count.trim()) newErrors.guest_count = 'Guest count is required';
    if (!formData.wed_date.trim()) newErrors.wed_date = 'Wedding date is required';
    if (!formData.add_detail.trim()) newErrors.add_detail = 'Additional details are required';
    if (!formData.captchaAnswer.trim()) newErrors.captchaAnswer = 'CAPTCHA is required';
    else if (formData.captchaAnswer !== captcha.answer) newErrors.captchaAnswer = 'Incorrect CAPTCHA';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await postWeddingForm({
        your_name: formData.your_name,
        partner_name: formData.partner_name,
        email: formData.email,
        phone: formData.phone,
        guest_count: formData.guest_count,
        wed_date: formData.wed_date,
        add_detail: formData.add_detail
      });
      setStatus('Thank you! Your request has been submitted.');
      setFormData({
        your_name: '',
        partner_name: '',
        email: '',
        phone: '',
        guest_count: '',
        wed_date: '',
        add_detail: '',
        captchaAnswer: ''
      });
      // console.log("data wedding form ===============>", ostWeddingForm )
      generateCaptcha();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('Failed to submit. Please try again later.');
    }
  };

  return (
    <section className="py-5 text-white" style={{ backgroundColor: 'var(--btn-1)' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="display-5 mb-4">Begin Your Wedding Journey</h2>
            <p className="lead mb-5">Contact our wedding specialists to start planning your perfect day</p>
            <Card className="border-0 p-4 text-dark">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="your_name"
                          value={formData.your_name}
                          onChange={handleChange}
                          isInvalid={!!errors.your_name}
                          placeholder="Enter your name"
                        />
                        <Form.Control.Feedback type="invalid">{errors.your_name}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Partner's Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="partner_name"
                          value={formData.partner_name}
                          onChange={handleChange}
                          isInvalid={!!errors.partner_name}
                          placeholder="Enter your partner's name"
                        />
                        <Form.Control.Feedback type="invalid">{errors.partner_name}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="Enter email"
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          placeholder="Enter phone number"
                        />
                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Estimated Guest Count</Form.Label>
                        <Form.Select
                          name="guest_count"
                          value={formData.guest_count}
                          onChange={handleChange}
                          isInvalid={!!errors.guest_count}
                        >
                          <option value="">Select guest count</option>
                          <option>Less than 50</option>
                          <option>50-100</option>
                          <option>100-150</option>
                          <option>150-200</option>
                          <option>200+</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">{errors.guest_count}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Preferred Wedding Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="wed_date"
                          value={formData.wed_date}
                          onChange={handleChange}
                          isInvalid={!!errors.wed_date}
                        />
                        <Form.Control.Feedback type="invalid">{errors.wed_date}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Additional Details</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="add_detail"
                          rows={3}
                          placeholder="Tell us about your vision for your special day"
                          value={formData.add_detail}
                          onChange={handleChange}
                          isInvalid={!!errors.add_detail}
                        />
                        <Form.Control.Feedback type="invalid">{errors.add_detail}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group style={{textAlign: 'left'}}>
                        <Form.Label>Captcha: {captcha.question}</Form.Label>
                        <Form.Control
                          type="text"
                          name="captchaAnswer"
                          value={formData.captchaAnswer}
                          onChange={handleChange}
                          placeholder="Answer"
                          isInvalid={!!errors.captchaAnswer}
                        />
                        <Form.Control.Feedback type="invalid">{errors.captchaAnswer}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    {status && (
                      <Col md={12} className="text-center mt-3">
                        <p className="text-success">{status}</p>
                      </Col>
                    )}

                    <Col md={12} className="text-center mt-4">
                      <Button variant="primary" size="lg" className="px-5 btn-custom" type="submit">
                        Submit Request
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WeddingContactForm;

