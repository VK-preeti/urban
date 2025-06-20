//  import React, { useState, useEffect } from 'react';
// import { postNewsletter } from '../../api/postNewsletter';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const Newslatter = () => {
//   const [email, setEmail] = useState('');
//   const [captcha, setCaptcha] = useState({ question: '', answer: '' });
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [status, setStatus] = useState(null);
//   const [error, setError] = useState(null);

//   // Generate CAPTCHA on mount
//   useEffect(() => {
//     generateCaptcha();
//   }, []);

//   const generateCaptcha = () => {
//     const a = Math.floor(Math.random() * 10);
//     const b = Math.floor(Math.random() * 10);
//     setCaptcha({ question: `What is ${a} + ${b}?`, answer: (a + b).toString() });
//     setCaptchaInput('');
//     setError(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus(null);
//     setError(null);

//     // Validate CAPTCHA
//     if (captchaInput.trim() !== captcha.answer) {
//       setError('Incorrect CAPTCHA. Please try again.');
//       generateCaptcha();
//       return;
//     }

//     try {
//       const response = await postNewsletter({ email_id: email });
//       console.log("Newsletter subscription response:", response);
//       setStatus('Subscribed successfully!');
//       setEmail('');
//       generateCaptcha(); // refresh CAPTCHA after success
//     } catch (err) {
//       console.error("Error subscribing to newsletter:", err);
//       setStatus('Failed to subscribe.');
//     }
//   };

//   return (
//     <div>
//       <div className="row">
//         <div className="footer__newsletter">
//           <span className="h2">Join Our Newsletter</span>
//           <div className="rts__form" style={{ maxWidth: '400px' }}>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 style={{ width: '50%', padding: '8px', marginBottom: '10px' }}
//               />
//               <div style={{ marginBottom: '10px' }}>
//                 <label><strong>CAPTCHA:</strong> {captcha.question}</label>
//                 <input
//                   type="text"
//                   name="captcha"
//                   placeholder="Answer"
//                   value={captchaInput}
//                   onChange={(e) => setCaptchaInput(e.target.value)}
//                   required
//                   style={{ width: '50%', padding: '8px', marginTop: '5px' }}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 style={{
//                   width: '50%',
//                   padding: '10px',
//                   backgroundColor: '#007bff',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Subscribe
//               </button>
//             </form>
//             {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
//             {status && <p style={{ color: 'green', marginTop: '10px' }}>{status}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newslatter;
 

import { useState, useEffect } from 'react';
import '../../components/global.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  // Generate CAPTCHA on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ question: `What is ${a} + ${b}?`, answer: (a + b).toString() });
    setCaptchaInput('');
    setError('');
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (captchaInput.trim() === '') {
    setError('Please enter the CAPTCHA.');
    setStatus('');
    return;
  }

  if (captchaInput.trim() !== captcha.answer) {
    setError('Incorrect CAPTCHA. Please try again.');
    setStatus('');
    generateCaptcha();
    return;
  }

  // Submit logic
  setStatus('Subscribed successfully!');
  setError('');
  setEmail('');
  setCaptchaInput('');
  generateCaptcha();
};


  return (
    <div className="footer__newsletter">
      <span className="h2" style={{color: 'white'}}>Join Our Newsletter</span>
      <div className="rts__form" style={{ maxWidth: '500px' }}>
        {/* Email input and Subscribe button */}
        <div className="input-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="theme-btn btn-style sm-btn fill"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </div>

        {/* CAPTCHA row */}
        <div className="d-flex align-items-center mb-2">
          <label className="me-2 fw-bold mb-0" style={{color: 'white'}}>
            CAPTCHA: {captcha.question}
          </label>
          <input
            type="text"
            name="captcha"
            placeholder="Answer"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            required
            className="form-control"
            style={{width: '49%'}}
          />
        </div>

        {/* Feedback */}
        {error && <p className="text-danger mt-2">{error}</p>}
        {status && <p className="text-success mt-2">{status}</p>}
      </div>
    </div>
  );
}
