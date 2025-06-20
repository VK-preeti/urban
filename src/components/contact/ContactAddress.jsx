 import React from 'react';

const ContactAddress = () => {
  return (
    <div className="container my-5">
      {/* Three cards in a single row */}
      <div className="row mb-5">
        {/* Head Office Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header  text-white" style={{background: '#ab8a62', color: 'white'}}>
              <h5 className="mb-0">Head Office (Delhi)</h5>
            </div>
            <div className="card-body">
              <address>
                <p>
                  <i className="bi bi-geo-alt "></i>
                  252/1, First Floor, Shahpur Jat
                  Delhi - 110049
                </p>
                <p>
                  <i className="bi bi-telephone-fill "></i>
                  <strong>Complaints:</strong> +91-9873601704, +91-9999835288
                </p>
                <p>
                  <i className="bi bi-person "></i>
                  <strong>Devender Kumar (G.M.):</strong> +91-9311001704
                </p>
                <p>
                  <i className="bi bi-person "></i>
                  <strong>Mehnaz:</strong> +91-9310959763
                </p>
                <p>
                  <i className="bi bi-envelope "></i>
                  <strong>Email:</strong> info@dynastyresort.com
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Sales Person Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header   text-white" style={{background: '#ab8a62', color: 'white'}}>
              <h5 className="mb-0">Sales (Maharashtra & Gujarat)</h5>
            </div>
            <div className="card-body">
              <address>
                  <p>
                  <i className="bi bi-geo-alt "></i>
                  <strong>Devender Kumar (G.M.)</strong> 
                </p>
                <p>
                  <i className="bi bi-telephone-fill "></i>
                   
                  <strong>Phone:</strong> +91-9999835288
                </p>
                <p>
                  <i className="bi bi-phone-fill "></i>
                  <strong>Mobile:</strong> +91-9311001704
                </p>
                <p>
                  <i className="bi bi-envelope "></i>
                  <strong>E-Mail:</strong> gm@dynastyresort.com
                </p>
                {/* <div className="mt-4 pt-2">
                  <div className="alert alert-info">
                    <strong>
                      <i className="bi bi-info-circle me-2"></i>
                      Please deposit 50% advance to confirm booking
                    </strong>
                  </div>
                  <p className="text-muted small">Please feel free for further clarifications</p>
                </div> */}
              </address>
            </div>
          </div>
        </div>

        {/* Resort Address Card */}
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header   text-white" style={{background: '#ab8a62', color: 'white'}}>
              <h5 className="mb-0">Sales (Punjab Office)</h5>
            </div>
            <div className="card-body">
              <address>
                <p  >
                  <i className="bi bi-geo-alt "></i>
                  
                  New Holidays Tour Pnb Road Near Post office Salem Tabri Ludhiana 141008

                  
                </p>
                {/* <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                  <strong>Phone:</strong> 05942-240115
                </p> */}
                <p>
                  <i className="bi bi-phone-fill "></i>
                  <strong>Mobile:</strong> +91-9216072001 / +91-7837972001
                </p>
                <p>
                  <i className="bi bi-envelope "></i>
                  <strong>E-Mail:</strong> salesnht@gmail.com 
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* How to Reach in another row */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header text-white " style={{background: '#ab8a62', color: 'white', textcolor: 'white'}}>
              <h5 className="mb-0">How To Reach</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className=" p-3 rounded-circle me-3" style={{background: '#ab8a62'}}>
                      <i className="bi bi-arrow-up-right-circle"></i>
                    </div>
                    <div>
                      <strong>Height From The Sea Level</strong>
                      <p className="mb-0">5600 feet</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className=" p-3 rounded-circle me-3" style={{background: '#ab8a62'}}>
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      <strong>Distance From Delhi</strong>
                      <p className="mb-0">280 Kms</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className=" p-3 rounded-circle me-3" style={{background: '#ab8a62'}}>
                      <i className="bi bi-airplane"></i>
                    </div>
                    <div>
                      <strong>Distance From Panth Nagar Airport</strong>
                      <p className="mb-0">70 Kms</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className=" p-3 rounded-circle me-3" style={{background: '#ab8a62'}}>
                      <i className="bi bi-train-front"></i>
                    </div>
                    <div>
                      <strong>Distance From Kathgodam Rly Stn.</strong>
                      <p className="mb-0">50 Kms</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className=" p-3 rounded-circle me-3" style={{background: '#ab8a62'}}>
                      <i className="bi bi-bus-front"></i>
                    </div>
                    <div>
                      <strong>Distance From Tallital Bus Adda</strong>
                      <p className="mb-0">12 Kms</p>
                    </div>
                  </div>
                  
                  {/* <div className="d-flex justify-content-center align-items-center mt-4">
                    <a href="#" className="btn btn-outline-primary">
                      <i className="bi bi-map me-2"></i>
                      View on Google Maps
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cancellation Policy Section */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header   text-white" style={{background: '#ab8a62', color: 'white'}}>
              <h5 className="mb-0">Cancellation Policy</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex">
                  <i className="bi bi-x-circle text-danger me-3"></i>
                  For bookings cancelled before 07 days of the check in date there will be No refund.
                </li>
                <li className="list-group-item d-flex">
                  <i className="bi bi-arrow-return-right text-warning me-3"></i>
                  In case of cancellation Before 10 days of the arrival date the refund value will be 60% of the total booking amount.
                </li>
                <li className="list-group-item d-flex">
                  <i className="bi bi-arrow-return-right text-success me-3"></i>
                  For cancellation before 15 days of the check in date - refund value will be 75% of the booking amount.
                </li>
                <li className="list-group-item d-flex">
                  <i className="bi bi-x-circle text-danger me-3"></i>
                  There would be no refund in case of no show or any natural calamity.
                </li>
                <li className="list-group-item d-flex">
                  <i className="bi bi-x-circle text-danger me-3"></i>
                  There will be no refund after booking amount as been paid.
                </li>
              </ul>
            </div>
            <div className="card-footer bg-light">
              <div className="alert alert-warning mb-0">
                <strong>Note:</strong> Please deposit 50% advance to confirm the booking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;