import React from 'react';
// import './Modal.css';  // Add custom styles for the modal

const Modal = ({ isOpen, closeModal, imageSrc }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <img src={imageSrc} alt="Modal" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;


// import React, { useEffect } from 'react';
// import './Modal.css';

// function Modal({ isOpen, closeModal, imageSrc }) {
//     // Close modal when Escape key is pressed
//     useEffect(() => {
//         const handleEscKey = (event) => {
//             if (event.key === 'Escape') {
//                 closeModal();
//             }
//         };

//         if (isOpen) {
//             document.addEventListener('keydown', handleEscKey);
//         }

//         return () => {
//             document.removeEventListener('keydown', handleEscKey);
//         };
//     }, [isOpen, closeModal]);

//     // If modal is not open, don't render anything
//     if (!isOpen) return null;

//     // Close modal when clicking outside the image
//     const handleOutsideClick = (e) => {
//         if (e.target.classList.contains('modal-overlay')) {
//             closeModal();
//         }
//     };

//     return (
//         <div className="modal-overlay" onClick={handleOutsideClick}>
//             <div className="modal-content">
//                 <button className="modal-close" onClick={closeModal}>×</button>
//                 {imageSrc && <img src={imageSrc} alt="Gallery Preview" className="modal-image" />}
//             </div>
//         </div>
//     );
// }

// export default Modal;
