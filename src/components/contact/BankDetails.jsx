  import React from 'react';

const BankDetails = () => {
  return (
   <div className="container my-5">
  <div className="row align-items-stretch">
    {/* Left Side */}
    <div className="col-lg-5 mb-4 d-flex">
      <div className="card border-0 rounded-lg overflow-hidden shadow w-100" style={{ height: '400px' }}>
        <div className="bg-gradient-primary text-white p-2 text-center h-100 d-flex align-items-center justify-content-center">
          <img 
            src="../../../assets/images/banner/paytmbanner.jpg" 
            alt="Paytm Logo" 
            className="img-fluid mx-auto"
            style={{ maxHeight: '100%', width: '230px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="col-lg-7 d-flex">
      <div className="card border-0 rounded-lg shadow w-100" style={{ height: '400px' }}>
        <div className="card-header text-white p-3" style={{background: '#ab8a62'}}>
          <div className="d-flex align-items-center">
            <i className="bi bi-bank2 fs-4 me-2"></i>
            <h5 className="mb-0 fw-bold">Bank Details</h5>
          </div>
        </div>

        <div className="card-body p-3">
          <div className="row">
            <div className="col-12">
              <div className="bg-light rounded p-3 mb-3">
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="p-2 rounded-circle text-white me-2" style={{ background: '#ab8a62' }}>
                        <i className="bi bi-building"></i>
                      </div>
                      <div>
                        <p className="text-muted small mb-0">Account Name</p>
                        <h6 className="fw-bold mb-0">The Urban Escapes</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="p-2 rounded-circle text-white me-2" style={{ background: '#ab8a62' }}>
                        <i className="bi bi-bank"></i>
                      </div>
                      <div>
                        <p className="text-muted small mb-0">Bank Name</p>
                        <h6 className="fw-bold mb-0">ICICI Bank</h6>
                        <p className="small text-muted mb-0">Green Park, New Delhi</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="p-2 rounded-circle text-white me-2" style={{ background: '#ab8a62' }}>
                        <i className="bi bi-credit-card"></i>
                      </div>
                      <div>
                        <p className="text-muted small mb-0">Account Number</p>
                        <h6 className="fw-bold mb-0">007105002818</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="p-2 rounded-circle text-white me-2" style={{ background: '#ab8a62' }}>
                        <i className="bi bi-upc"></i>
                      </div>
                      <div>
                        <p className="text-muted small mb-0">IFSC Code</p>
                        <h6 className="fw-bold mb-0">ICIC0000071</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="alert d-flex align-items-center p-2 mb-0">
                <div className="p-2 rounded-circle text-primary me-2" style={{ background: '#ab8a62' }}>
                  <i className="bi bi-phone"></i>
                </div>
                <div>
                  <p className="text-black small mb-0">Paytm Number</p>
                  <h6 className="fw-bold mb-0">+91-9999835288</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

// Add these styles to your CSS file or use inline styles
// .bg-gradient-primary {
//   background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
// }

export default BankDetails;