 import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFaq } from '../../api/getFaq';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Fallback Static Data
const fallbackFaqData = [
  {
    id: 1,
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button..."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard...)"
  },
];

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => (
  <div className="card mb-3 border-0">
    <div className="card-header bg-white border-0 p-0">
      <button
        className="btn btn-link w-100 d-flex justify-content-between align-items-center text-decoration-none text-start px-3 py-3"
        onClick={toggleFAQ}
      >
        <span className="fw-medium" style={{color:'#ab8a62' }}>{question}</span>
        <span>{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </button>
    </div>
    <div className={`collapse ${isOpen ? 'show' : ''}`}>
      <div className="card-body pt-0 pb-3 px-3 text-secondary">
        {answer}
      </div>
    </div>
    <hr className="my-0" />
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted question:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Your Question"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary px-4">Submit Question</button>
    </form>
  );
};

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [faqList, setFaqList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaq()
      .then((res) => {
        if (res?.status && Array.isArray(res.faqs)) {
          const formatted = res.faqs.map(faq => ({
            id: faq.id,
            question: faq.questions,
            answer: faq.answers
          }));
          setFaqList(formatted.length > 0 ? formatted : fallbackFaqData);
        } else {
          setFaqList(fallbackFaqData);
        }
      })
      .catch((err) => {
        console.error("Error fetching FAQs:", err);
        setFaqList(fallbackFaqData);
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleFAQ = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h4>Frequently Asked Questions</h4>
            <p className="lead text-muted">Find answers to common questions about our services.</p>
          </div>

          <div className="accordion" id="faqAccordion">
            {loading
              ? Array(4).fill().map((_, index) => (
                  <div className="mb-3" key={index}>
                    <Skeleton height={50} />
                    <Skeleton count={2} />
                  </div>
                ))
              : faqList.map((item) => (
                  <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItem === item.id}
                    toggleFAQ={() => toggleFAQ(item.id)}
                  />
                ))
            }
          </div>

          {/* <div className="text-center mt-4">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setShowContactForm(prev => !prev)}
            >
              {showContactForm ? "Hide" : "Ask your own question"}
            </button>
            {showContactForm && <ContactForm />}
          </div> */}
        </div>
      </div>
    </div>
  );
}
