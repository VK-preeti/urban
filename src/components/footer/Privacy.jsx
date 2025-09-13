import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-success mb-3">Privacy Policy</h1>
              <p className="lead text-muted mb-4">Urban Escape Resort</p>
              <hr className="border-success opacity-25 w-25 mx-auto"/>
              <p className="text-muted">
                At <strong>Urban Escape</strong>, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
              </p>
            </div>

            {/* Main Content Card */}
            <div className="card shadow border-0 rounded-4">
              <div className="card-body p-5">
                
                {/* Section 1 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    1. Information We Collect
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• Personal details you provide (name, phone number, email, address).</p>
                    <p className="text-muted mb-2">• Booking and payment information.</p>
                    <p className="text-muted mb-0">• Data collected automatically (IP address, browser type, device info).</p>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    2. How We Use Your Information
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• To process bookings and provide services.</p>
                    <p className="text-muted mb-2">• To communicate with you regarding reservations, offers, or support.</p>
                    <p className="text-muted mb-0">• To improve our services and customer experience.</p>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    3. Data Sharing
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• We <strong>do not sell or rent</strong> your personal data.</p>
                    <p className="text-muted mb-0">• We may share data with trusted partners for booking management and legal compliance.</p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    4. Data Security
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• We use industry-standard security measures to protect your information.</p>
                    <p className="text-muted mb-0">• However, no system is 100% secure. Use our services at your own risk.</p>
                  </div>
                </section>

                {/* Section 5 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    5. Your Rights
                  </h4>
                  <p className="text-muted lh-lg">
                    You can request access, updates, or deletion of your personal data by contacting us.
                  </p>
                </section>

                {/* Contact Section */}
                <section>
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    6. Contact Us
                  </h4>
                  <p className="text-muted lh-lg mb-4">
                    For privacy-related queries, contact us:
                  </p>
                  <div className="mb-4">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-telephone-fill text-success me-3"></i>
                          <div>
                            <p className="mb-1 fw-semibold">Phone Numbers:</p>
                            <p className="text-muted small mb-0">+91-9873025200</p>
                            <p className="text-muted small mb-0">+91-8954310200</p>
                            <p className="text-muted small mb-0">+91-9873578700</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-envelope-fill text-success me-3"></i>
                          <div>
                            <p className="mb-1 fw-semibold">Email:</p>
                            <p className="text-muted small mb-0">sales@urbanescape.in</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-geo-alt-fill text-success me-3 mt-1"></i>
                          <div>
                            <p className="mb-1 fw-semibold">Address:</p>
                            <p className="text-muted small mb-0">
                              Jangalia Gaon, Bhimtal, Uttarakhand - 263136, India
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                      <Link to="/contact" className="btn btn-success rounded-pill">
                        <i className="bi bi-chat-dots me-2"></i>Contact Us
                      </Link>
                      <a href="mailto:sales@urbanescape.in" className="btn btn-outline-success rounded-pill">
                        <i className="bi bi-envelope me-2"></i>sales@urbanescape.in
                      </a>
                      <a href="tel:+919873025200" className="btn btn-outline-success rounded-pill">
                        <i className="bi bi-telephone me-2"></i>Call Now
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;