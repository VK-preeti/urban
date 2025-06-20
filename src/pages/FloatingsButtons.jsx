 import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = ({ phoneNumber, whatsappNumber, bookingUrl }) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleBookingClick = () => {
    window.location.href = bookingUrl;
  };

  return (
    <>
      {/* Contact buttons - right corner */}
      <div className="position-fixed bottom-0 end-0 mb-3 me-3 d-flex flex-column gap-2" style={{ zIndex: 1050 }}>
        <button 
          onClick={handlePhoneClick}
          className="btn btn-success rounded-circle shadow p-3 d-flex align-items-center justify-content-center"
          aria-label="Call us"
          style={{ width: '60px', height: '60px',  backgroundColor: '#106eec', 
            borderColor: '#106eec'  }}
        >
          <Phone size={24} />
        </button>
        
        <button 
          onClick={handleWhatsAppClick}
          className="btn btn-success rounded-circle shadow p-3 d-flex align-items-center justify-content-center"
          aria-label="WhatsApp us"
          style={{ 
            width: '60px', 
            height: '60px', 
            backgroundColor: '#25D366', 
            borderColor: '#25D366' 
          }}
        >
          <FaWhatsapp size={24} />
        </button>
      </div>

      {/* Booking button - left corner */}
      {/* <div className="position-fixed bottom-0 start-0 mb-3 ms-3" style={{ zIndex: 1050 }}>
        <a 
          onClick={handleBookingClick}
          href={bookingUrl}
          className="d-block"
          aria-label="Book now"
          style={{ cursor: 'pointer' }}
        >
         <img 
        src="/assets/images/booknow1.png" 
        alt="Book Now" 
        width="100" 
        height="100"
        className="img-fluid"
      />

        </a>
      </div> */}
    </>
  );
};

export default FloatingButtons;