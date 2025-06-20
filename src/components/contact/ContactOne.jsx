// import React from 'react'
// // import Skeleton from 'react-loading-skeleton';
// // import 'react-loading-skeleton/dist/skeleton.css';
// // import { getContact } from '../../api/getContact';
 

// function ContactOne() {

//     //   const [contact, setContact] = useState(null);
//     //   const [loading, setLoading] = useState(true);

//     //   useEffect(() => {
//     //     getContact()
//     //       .then((data) => {
//     //         // Strip HTML tags from string fields
//     //         const clean = (str) => str?.replace(/<\/?[^>]+(>|$)/g, "").trim();
//     //         setContact({
//     //           ...data,
//     //           mail: clean(data.mail),
//     //           mobile: clean(data.mobile),
//     //           address: clean(data.address),
//     //           facebook: clean(data.facebook),
//     //           instagram: clean(data.instagram),
//     //           twitter: clean(data.twitter),
//     //           youtube: clean(data.youtube),
//     //           linkedin: clean(data.linkedin),
//     //         });
//     //       })
//     //       .catch((err) => {
//     //         console.error("Error fetching contact data:", err);
//     //       })
//     //       .finally(() => setLoading(false));
//     //   }, []);


//     return (
//         <>
//             {/* contact area */}
//             <div className="rts__section section__padding">
//                 <div className="container">
//                     <div className="row g-30 align-items-center">
//                         <div className="col-lg-6">
//                             <div className="rts__contact">
//                                 <span className="h4 d-block mb-30 text-center">
//                                     Love to hear from you Get in touch!
//                                 </span>
//                                 <form
//                                     action="mailer.php"
//                                     method="post"
//                                     className="rts__contact__form"
//                                     id="contact-form"
//                                 >
//                                     <div className="form-input">
//                                         <label htmlFor="name">Your Name</label>
//                                         <div className="pr">
//                                             <input
//                                                 type="text"
//                                                 id="name"
//                                                 name="name"
//                                                 placeholder="Your Name"
//                                                 required=""
//                                             />
//                                             <i className="flaticon-user" />
//                                         </div>
//                                     </div>
//                                     <div className="form-input">
//                                         <label htmlFor="email">Your Email</label>
//                                         <div className="pr">
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 name="email"
//                                                 placeholder="Your Email"
//                                                 required=""
//                                             />
//                                             <i className="flaticon-envelope" />
//                                         </div>
//                                     </div>
//                                     <div className="form-input">
//                                         <label htmlFor="msg">Your Message</label>
//                                         <div className="pr">
//                                             <textarea
//                                                 id="msg"
//                                                 name="msg"
//                                                 placeholder="Message"
//                                                 required=""
//                                                 defaultValue={""}
//                                             />
//                                             <img
//                                                 src="/assets/images/icon/message.svg"
//                                                 width={20}
//                                                 height={20}
//                                                 alt=""
//                                             />
//                                         </div>
//                                     </div>
//                                     <button type="submit" className="theme-btn btn-style fill w-100">
//                                         <span>Send Message</span>
//                                     </button>
//                                 </form>
//                                 <div id="form-messages" className="mt-20" />
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="contact__image">
//                                 <img
//                                     className="rounded-2 w-100 img-fluid"
//                                     src="/assets/images/pages/contact.webp"
//                                     width={645}
//                                     height={560}
//                                     alt="contact__image"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container pt-120">
//                     <div className="row g-30 align-items-center">
//                         <div className="col-lg-6">
//                             <div className="contact__map">
//                                 <iframe
//                                     className="w-100"
//                                     height={560}
//                                     src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=phuket+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
//                                     title="Map showing the location of My Business"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="contact__info">
//                                 <div className="contact__info__item">
//                                     <h4>Hotel Info Center</h4>
//                                     <p>
//                                         Open Hours: Monday – Sunday <br />
//                                         Telephone:&nbsp;+12505550199 <br />
//                                         Fax: +12505550199 <br />
//                                         Email:&nbsp;info@moonlit.com
//                                     </p>
//                                 </div>
//                                 <div className="contact__info__item">
//                                     <h4>Hotel location</h4>
//                                     <p>
//                                         Address: The Ritz-Carlton (California, USA) <br />
//                                         Telephone:&nbsp;+12505550199 <br />
//                                         Fax: +12505550199 <br />
//                                         Email:&nbsp;info@moonlit.com
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* contact area end */}
//         </>

//     )
// }

// export default ContactOne


import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getContact } from '../../api/getContact';
import { postConatct } from '../../api/postContact';
import Faq from './Faq';
import BankDetails from './BankDetails';
import ContactAddress from './ContactAddress';

function ContactOne() {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
    captchaAnswer: ''
  });
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getContact()
      .then((data) => {
        const clean = (str) => str?.replace(/<\/?[^>]+(>|$)/g, '').trim();
        setContact({
          ...data,
          mail: clean(data.mail),
          mobile: clean(data.mobile),
          address: clean(data.address),
          facebook: clean(data.facebook),
          instagram: clean(data.instagram),
          twitter: clean(data.twitter),
          youtube: clean(data.youtube),
          linkedin: clean(data.linkedin),
        });
      })
      .catch((err) => {
        console.error("Error fetching contact data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone_number)) newErrors.phone_number = 'Phone must be 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.captchaAnswer.trim()) newErrors.captchaAnswer = 'CAPTCHA is required';
    else if (formData.captchaAnswer !== captcha.answer) newErrors.captchaAnswer = 'Incorrect CAPTCHA';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await postConatct({
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number,
        message: formData.message
      });
      setStatus('Thank you! Your message has been submitted.');
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        message: '',
        captchaAnswer: ''
      });
      generateCaptcha();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('Failed to submit. Please try again later.');
    }
  };

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row g-30 align-items-center">
          <div className="col-lg-6">
            <div className="rts__contact">
              <span className="h4 d-block mb-30 text-center">
                Love to hear from you – Get in touch!
              </span>
              <form onSubmit={handleSubmit} className="rts__contact__form">
                <div className="form-input">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="form-input">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="form-input">
                  <label htmlFor="phone_number">Phone</label>
                  <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                  {errors.phone_number && <small className="text-danger">{errors.phone_number}</small>}
                </div>
                <div className="form-input">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>
                <div className="form-input">
                  <label>CAPTCHA: {captcha.question}</label>
                  <input type="text" name="captchaAnswer" value={formData.captchaAnswer} onChange={handleChange} />
                  {errors.captchaAnswer && <small className="text-danger">{errors.captchaAnswer}</small>}
                </div>
                <button type="submit" className="theme-btn btn-style fill w-100">
                  <span>Send Message</span>
                </button>
                {status && <div className="mt-2 text-info">{status}</div>}
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="rounded-2 w-100 img-fluid"
              src="/assets/images/banner/roombanner.jpg"
              width={645}
              height={560}
              alt="contact"
              style={{paddingTop: '10px'}}
            />
          </div>
        </div>

        <div className="container pt-120">
          <div className="row g-30 align-items-center">
            <div className="col-lg-6">
              {/* <iframe
                className="w-100"
                height={560}
                src="https://www.google.com/maps/embed?pb=!1m18..."
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing the location of The Urban Escape"
              /> */}
      <iframe
  className="responsive-map"
   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v0000000000000"
  width="100%"
  height="560"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="The Urban Escape Address Map"
  referrerPolicy="no-referrer-when-downgrade"
/>


  

            </div>
            <div className="col-lg-6">
              <div className="contact__info">
                <div className="contact__info__item">
                  <h4 style={{fontWeight: 'bold'}}>Hotel Info Center</h4>
                  <p>
                    Open Hours: Monday – Sunday <br />
                    Telephone: {loading ? <Skeleton width={250} /> : contact?.mobile} <br />
                    Email: {loading ? <Skeleton width={250} /> : contact?.mail}
                  </p>
                </div>
                <div className="contact__info__item">
                  <h4 style={{fontWeight: 'bold'}}>Hotel Location</h4>
                  <p>
                    Address: {loading ? <Skeleton width={300} /> : contact?.address} <br />
                    Telephone: {loading ? <Skeleton width={250} /> : contact?.mobile} <br />
                    Email: {loading ? <Skeleton width={250} /> : contact?.mail}
                  </p>
                </div>
              </div>
            </div>
          </div>



        {/* contact address */}

        {/* <ContactAddress /> */}

        {/* contact address */}
        {/* bank details */}
        {/* <BankDetails /> */}
          {/* FAQ Section */}
          <Faq />
        </div>
      </div>
    </div>
  );
}

export default ContactOne;
