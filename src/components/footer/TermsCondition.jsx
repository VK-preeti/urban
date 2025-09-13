import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-success mb-3">Terms & Conditions</h1>
              <p className="lead text-muted mb-4">Urban Escape Resort</p>
              <hr className="border-success opacity-25 w-25 mx-auto"/>
              <p className="text-muted">
                By booking or using the services of <strong>Urban Escape</strong>, you agree to these Terms & Conditions.
              </p>
            </div>

            {/* Main Content Card */}
            <div className="card shadow border-0 rounded-4">
              <div className="card-body p-5">
                
                {/* Section 1 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    1. Acceptance of Terms
                  </h4>
                  <p className="text-muted lh-lg">
                    Using our website, making a booking, or staying with us means you accept these terms. If you do not agree, please do not use our services.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    2. Booking & Payments
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• Full payment is required to confirm a booking.</p>
                    <p className="text-muted mb-2">• Prices may change without prior notice.</p>
                    <p className="text-muted mb-0">• All transactions are subject to applicable taxes.</p>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    3. Guest Responsibilities
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• Provide accurate booking details.</p>
                    <p className="text-muted mb-2">• Respect property rules and staff.</p>
                    <p className="text-muted mb-0">• Do not engage in unlawful, disruptive, or unsafe activities.</p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    4. Check-In & Check-Out
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• Check-in and check-out timings will be provided at booking.</p>
                    <p className="text-muted mb-0">• Late check-out may incur extra charges.</p>
                  </div>
                </section>

                {/* Section 5 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    5. Liability
                  </h4>
                  <div className="ms-4">
                    <p className="text-muted mb-2">• Urban Escape is not responsible for loss of personal belongings, accidents, or third-party services.</p>
                    <p className="text-muted mb-0">• Guests are responsible for their conduct during their stay.</p>
                  </div>
                </section>

                {/* Section 6 */}
                <section className="mb-5">
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    6. Modifications
                  </h4>
                  <p className="text-muted lh-lg">
                    We may update these Terms & Conditions. Continued use of our services implies acceptance of any changes.
                  </p>
                </section>

                {/* Contact Section */}
                <section>
                  <h4 className="text-success fw-bold border-bottom border-success pb-2 mb-4">
                    7. Contact Us
                  </h4>
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

export default TermsCondition;